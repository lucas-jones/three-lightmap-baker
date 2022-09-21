import { sRGBEncoding, Color, DirectionalLight, DoubleSide, LinearFilter, Mesh, MeshBasicMaterial, MeshStandardMaterial, NearestFilter, Object3D, PerspectiveCamera, PlaneGeometry, Scene, Texture, Vector3, WebGLRenderer, WebGLRenderTarget } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { Pane } from 'tweakpane';
import { generateAtlas } from './atlas/generateAtlas';
import { renderAtlas } from './atlas/renderAtlas';
import { generateLightmap, RaycastOptions } from './raycast/raycaster';
import { LoadGLTF } from './utils/LoaderUtils';

const models = {
    ["level_blockout.glb"]: "level_blockout.glb",
}

const renderMode = {
    "Standard": "standard",
    "Positions": "positions",
    "Normals": "normals",
    "UV2 Debug": "uv",
    "Lightmap": "lightmap",
    "Beauty": "beauty"
}

const Filter = {
    "LinearFilter": "linear",
    "Nearest": "nearest"
}

export class LightBakerExample {

    renderer: WebGLRenderer;
    camera: PerspectiveCamera;
    scene: Scene;
    controls: OrbitControls;
    directionalLight: DirectionalLight;

    lightDummy: Object3D;
    lightTranformController: TransformControls;

    currentModel: Object3D;
    currentModelMeshs: Mesh[] = [];

    uvDebugTexture: Texture;
    positionTexture: WebGLRenderTarget;
    normalTexture: WebGLRenderTarget;
    lightmapTexture: Texture;

    debugPosition: Mesh;
    debugNormals: Mesh;
    debugLightmap: Mesh;

    options = {
        model: "level_blockout",
        renderMode: "beauty",
        lightMapSize: 1024,
        casts: 40,
        filterMode: "linear",
        denoise: true,
        samples: 1,
        denoiseOptions: {
            sigma: 2.5,
            threshold: 0.2,
            kSigma: 1.0,
        },
        directLightEnabled: true,
        indirectLightEnabled: true,
        ambientLightEnabled: true,
        ambientDistance: 0.3,
        debugTextures: false,
    };

    constructor(uvDebugTexture: Texture) {
        this.uvDebugTexture = uvDebugTexture;

        this.scene = new Scene();
        this.scene.background = new Color(0x74b9ff);

        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set( 0, 10, 10 );

        this.renderer = new WebGLRenderer({
            antialias: true,
        });
        this.renderer.outputEncoding = sRGBEncoding;
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.directionalLight = new DirectionalLight(0xffffff, 1);

        this.lightDummy = new Object3D();
        this.lightDummy.position.set(15.0, 30.0, 8.0);

        this.lightTranformController = new TransformControls(this.camera, this.renderer.domElement);
        this.lightTranformController.addEventListener('dragging-changed', (event) => {
            this.controls.enabled = !event.value;
            
        });
        this.lightTranformController.attach(this.lightDummy);
        this.scene.add(this.lightDummy);
        this.scene.add(this.lightTranformController);

        const pane = new Pane();
        pane.addInput(this.options, 'model', {
            options: models
        }).on('change', () => this.onMapChange());
        pane.addInput(this.options, 'renderMode', {
            options: renderMode
        }).on('change', () => this.onRenderModeChange());

        pane.addInput(this.options, 'lightMapSize', {
            max: 8192,
            min: 128,
            step: 128
        });

        pane.addInput(this.options, 'casts', {
            max: 500,
            min: 1
        });

        pane.addInput(this.options, 'samples', {
            max: 10,
            min: 1,
            step: 1,
        });

        pane.addInput(this.options, 'directLightEnabled');
        pane.addInput(this.options, 'indirectLightEnabled');
        pane.addInput(this.options, 'ambientLightEnabled');
        pane.addInput(this.options, 'ambientDistance', {
            max: 2,
            min: 0.01
        });

        pane.addInput(this.options, 'debugTextures').on('change', () => this.onRenderModeChange());
        

        pane.addInput(this.options, 'denoise').on('change', () => {
            denoiseOptions.disabled = !this.options.denoise;
        });

        pane.addInput(this.options, 'filterMode', {
            options: Filter
        }).on('change', () => this.onRenderModeChange());

        
        const denoiseOptions = pane.addFolder({
            title: 'Denoise Options',
            expanded: false
        });

        denoiseOptions.addInput(this.options.denoiseOptions, 'sigma', {
            max: 5,
            min: 0.1,
            step: 0.1
        });

        denoiseOptions.addInput(this.options.denoiseOptions, 'kSigma', {
            max: 5,
            min: 0.1,
            step: 0.1
        });

        denoiseOptions.addInput(this.options.denoiseOptions, 'threshold', {
            max: 5,
            min: 0.1,
            step: 0.1
        });

        
        pane.addButton({
            title: 'Render'
        }).on('click', () => this.generateLightmap());

        
        this.initialSetup();
    }

    async initialSetup() {
        await this.onMapChange();
    }

    async onMapChange() {
        if(this.currentModel) {
            this.scene.remove(this.currentModel)
        }
        
        this.camera.position.set( 0, 10, 10 );

        this.currentModelMeshs = [];
        
        const gltf = await LoadGLTF(this.options.model);

        gltf.scene.traverse((child: any) => {
            if(child.isMesh) {
                child.material._originalMap = child.material.map;
                this.currentModelMeshs.push(child);
            }
        });

        this.currentModel = gltf.scene;
        this.scene.add(gltf.scene);

        await this.updateAtlasTextures();

        this.update();

        await this.generateLightmap();
    }

    async updateAtlasTextures() {
        await generateAtlas(this.currentModelMeshs);
    }

    async generateLightmap() {
        const resolution = this.options.lightMapSize;

        const atlas = renderAtlas(this.renderer, this.currentModelMeshs, resolution, true);
        this.positionTexture = atlas.positionTexture;
        this.normalTexture = atlas.normalTexture;

        this.update();

        const lightmapperOptions: RaycastOptions = {
            resolution: resolution,
            casts: this.options.casts,
            samples: this.options.samples,
            filterMode: this.options.filterMode == "linear" ? LinearFilter : NearestFilter,
            denoise: this.options.denoise ? this.options.denoiseOptions : false,
            lightPosition: this.lightDummy.position,
            lightSize: 3,
            ambientDistance: this.options.ambientDistance,
            ambientLightEnabled: this.options.ambientLightEnabled,
            directLightEnabled: this.options.directLightEnabled,
            indirectLightEnabled: this.options.indirectLightEnabled,
            
        }

        this.lightTranformController.visible = false;

        const lightmapTexture = await generateLightmap(this.renderer, atlas.positionTexture.texture, atlas.normalTexture.texture, this.currentModelMeshs, lightmapperOptions);
        this.lightmapTexture = lightmapTexture;

        this.lightTranformController.visible = true;

        this.onRenderModeChange();
    }

    createDebugTexture(texture: Texture, position: Vector3) {
        const debugTexture = new Mesh(
            new PlaneGeometry(20, 20),
            new MeshBasicMaterial({
                map: texture,
                side: DoubleSide
            })
        );

        debugTexture.position.copy(position);
        debugTexture.scale.set(0.5, 0.5, 0.5);

        this.scene.add(debugTexture);

        return debugTexture
    }

    onDebugTexturesChange() {
        if(this.debugPosition) {
            this.scene.remove(this.debugPosition);
        }

        if(this.debugNormals) {
            this.scene.remove(this.debugNormals);
        }

        if(this.debugLightmap) {
            this.scene.remove(this.debugLightmap);
        }

        if(this.options.debugTextures) {
            this.debugPosition = this.createDebugTexture(this.positionTexture.texture, new Vector3(0, 10, 0));
            this.debugNormals = this.createDebugTexture(this.normalTexture.texture, new Vector3(12, 10, 0));
            this.debugLightmap = this.createDebugTexture(this.lightmapTexture, new Vector3(24, 10, 0));
        }
    }

    onRenderModeChange() {

        this.currentModel.traverse((child: any) => {
            if(child.isMesh) {
                // child.material = new MeshBasicMaterial();
                child.material.map = null;

                if(this.options.renderMode == "standard") {
                    child.material.lightMap = null;
                    child.material.map = child.material._originalMap;
                }

                if(this.options.renderMode == "positions") {
                    child.material.lightMap = this.positionTexture;
                }

                if(this.options.renderMode == "normals") {
                    child.material.lightMap = this.normalTexture; 
                }

                if(this.options.renderMode == "uv") {
                    child.material.lightMap = this.uvDebugTexture; 
                }

                if(this.options.renderMode == "lightmap") {
                    child.material.lightMap = this.lightmapTexture; 
                }

                if(this.options.renderMode == "beauty") {
                    child.material.lightMap = this.lightmapTexture; 
                    child.material.map = child.material._originalMap;
                }

                if(child.material.lightMap) {
                    child.material.lightMap.needsUpdate = true;
                }


                child.material.lightMapIntensity = 1;
                child.material.needsUpdate = true;
                
            }
        });

        if(this.options.renderMode == "standard") {
            this.scene.add(this.directionalLight);
            console.log("add light")
        } else {
            this.scene.remove(this.directionalLight);
            console.log("remove light")
        }

        this.onDebugTexturesChange();
    }

    update() {
        requestAnimationFrame(() => this.update());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}