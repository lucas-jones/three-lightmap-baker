import type {BufferGeometry, Mesh, BufferAttribute} from "three";
import type {XAtlasWebWorker} from "./XAtlasWebWorker";
import type {XAtlasJS} from "./XAtlasJS";

export type Class<T> = new (...args: any[]) => T

export interface ChartOptions{
    maxIterations?: number,
    straightnessWeight?: number,
    textureSeamWeight?: number,
    useInputMeshUvs?: boolean,
    maxChartArea?: number,
    normalDeviationWeight?: number,
    maxCost?: number,
    roundnessWeight?: number,
    maxBoundaryLength?: number,
    normalSeamWeight?: number,
    fixWinding?: boolean
}
export interface PackOptions{
    maxChartSize?: number,
    padding?: number,
    bilinear?: boolean,
    createImage?: boolean,
    rotateCharts?: boolean,
    rotateChartsToAxis?: boolean,
    blockAlign?: boolean,
    resolution?: number,
    bruteForce?: boolean,
    texelsPerUnit?: number
}

export abstract class BaseUVUnwrapper{
    private xAtlas: XAtlasWebWorker | XAtlasJS;

    /**
     *
     * @param THREE - for reference to BufferAttribute
     * @param packOptions - options for packing
     * @param chartOptions - options for unwrapping
     * @param useNormals - If true, will use the normals to calculate the uv
     * @param timeUnwrap - Logs the time taken to unwrap geometries
     * @param logProgress - Logs the unwrapping progress
     */
    constructor(
        public THREE: { BufferAttribute: Class<BufferAttribute> },
        public packOptions: PackOptions = {
            resolution: 2048,
        },
        public chartOptions: ChartOptions = {},
        public useNormals: boolean = false,
        public timeUnwrap: boolean = false,
        public logProgress: boolean = false,
    ) {
        this.xAtlas = this._createXAtlas()
    }
    private _libraryLoaded = false;
    async loadLibrary(onProgress: (mode: any, progress: any)=>void, wasmFilePath: string, workerFilePath?: string): Promise<void>{
        if(this._libraryLoaded) return
        await new Promise<void>((resolve, reject) => {
            try {
                this.xAtlas.init(
                    () => {
                        resolve()
                    }, onProgress, wasmFilePath, workerFilePath,
                )
            } catch (e) {
                reject(e)
            }
        })
        while (!(this.xAtlas.api ? await this.xAtlas.api.loaded : false)){
            await new Promise(r => setTimeout(r, 100)); // wait for load just in case
        }
        this._libraryLoaded = true;
    }

    private _isUnwrapping = false;

    /**
     * Pack multiple geometry into a single atlas
     * @param THREE
     * @param nodeList - list of geometries to unwrap
     * @param outputUv - Attribute to write the output uv to
     * @param inputUv - Attribute to write the input uv to (if any)
     */
    public async packAtlas(nodeList: BufferGeometry[], outputUv: 'uv'|'uv2' = 'uv2', inputUv: 'uv'|'uv2' = 'uv'): Promise<BufferGeometry[]>{
        if(!this._libraryLoaded) {
            console.warn('xatlas-three: library not loaded')
            return [];
        }
        if (!nodeList) return [];
        if(nodeList.length < 1) return [];
        const useUvs = this.chartOptions.useInputMeshUvs;

        while (this._isUnwrapping){
            console.log("xatlas-three: unwrapping another mesh, waiting 100 ms");
            await new Promise(r => setTimeout(r, 100));
        }
        // if(!(xAtlas.loaded)) { // when not using worker. todo
        // xAtlas.addOnLoad(proxy(()=>xAtlasUnWrapLiteGLMeshes(nodeList, onFinish, chartOptions, packOptions, useNormals, useUvs, resultAttribute, originalAttribute)));
        // return;
        // }
        this._isUnwrapping = true;

        await this.xAtlas.api.setProgressLogging(this.logProgress);
        await this.xAtlas.api.createAtlas();
        let meshAdded = [];
        let tag = ""; // for time logging
        for(let mesh of nodeList){
            let {uuid, index, attributes} = mesh;
            const scaled = mesh.userData.worldScale || 1; // can be [number, number, number] or number

            // if (unwrap === false) continue;

            meshAdded.push(uuid);
            if(!index || !attributes.position || attributes.position!.itemSize !== 3){
                console.warn("xatlas-three: Geometry not supported: ", mesh)
                continue;
            }
            tag = "Mesh" + meshAdded.length + " added to atlas: " + uuid;
            // console.log(typeof index.array)
            if(this.timeUnwrap) console.time(tag);
            await this.xAtlas.api.addMesh(index.array, attributes.position.array, attributes.normal ? attributes.normal.array: undefined, attributes.uv ? attributes.uv.array : undefined, uuid, this.useNormals, useUvs, scaled);
            if(this.timeUnwrap) console.timeEnd(tag);
        }
        tag = "Generated atlas with " + meshAdded.length + " meshes";
        if(this.timeUnwrap) console.time(tag);
        let meshes = await this.xAtlas.api.generateAtlas(this.chartOptions, this.packOptions, true);
        if(this.timeUnwrap) console.timeEnd(tag);
        let ret = [];
        for(let m of meshes){
            /**
             * @type {Mesh}
             */
            let mesh = nodeList.find(n => n.uuid === m.mesh)
            if(!mesh) {
                console.error("xatlas-three: Mesh not found: ", m.mesh)
                continue;
            }
            // if(mesh.getAttribute("position"))
            //     mesh.deleteAttribute("position");
            // if(mesh.getAttribute("normal") && m.vertex.normal)
            //     mesh.deleteAttribute("normal");
            // if(mesh.getAttribute("uv") && m.vertex.uv)
            //     mesh.deleteAttribute("uv");
            // if(mesh.getAttribute("uv2"))
            //     mesh.deleteAttribute("uv2");
            // if(mesh.getIndex())
            //     mesh.setIndex(null);

            if(m.vertex.vertices) mesh.setAttribute('position', new this.THREE.BufferAttribute(m.vertex.vertices, 3, false));
            // if(m.vertex.normals) mesh.setAttribute('normal', new this.THREE.BufferAttribute(m.vertex.normals, 3, true));
            // if(m.vertex.coords1) mesh.setAttribute(outputUv, new this.THREE.BufferAttribute(m.vertex.coords1, 2, false));
            // if(m.vertex.coords&&outputUv!==inputUv) mesh.setAttribute(inputUv, new this.THREE.BufferAttribute(m.vertex.coords, 2, false));
            if(m.index) mesh.setIndex(new this.THREE.BufferAttribute(m.index, 1, false));
           
            ret.push(mesh);
        }

        await this.xAtlas.api.destroyAtlas();
        this._isUnwrapping = false;

        return ret;
    }

    /**
     * Unwraps a geometry to generate uv
     * @param geometry
     * @param outputUv
     * @param inputUv
     */
    public async unwrapGeometry(geometry: BufferGeometry, outputUv: 'uv'|'uv2' = 'uv', inputUv: 'uv'|'uv2' = 'uv2'){
        return this.packAtlas([geometry], outputUv, inputUv);
    }

    protected abstract _createXAtlas(): any;

}
