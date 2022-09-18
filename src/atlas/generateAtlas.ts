import { BufferAttribute, Mesh } from 'three';
import { UVUnwrapper } from 'xatlas-three';

const unwrapper = new UVUnwrapper({ BufferAttribute: BufferAttribute });

enum ProgressCategory
{
	AddMesh,
	ComputeCharts,
	PackCharts,
	BuildOutputMeshes
};

export const loadXAtlasThree = async () => {
    const onProgress = (mode:number, progress:number) => {
        console.log(`🗺️ XAtlas ${ProgressCategory[mode]} ${progress}%`);
    }
    await unwrapper.loadLibrary(
        onProgress,
        'https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.wasm',
        'https://cdn.jsdelivr.net/npm/xatlasjs@0.1.0/dist/xatlas.js',
    );

    console.log("Loaded");
};

export const generateAtlas = async (meshs: Mesh[]) => {
	const geometry = meshs.map(mesh => mesh.geometry);

    // We can pass in options to the unwrapper
	// unwrapper.packOptions.padding = 1;

    // Write the shared UVs the uv2 attribute
	await unwrapper.packAtlas(geometry, 'uv2', 'uv');
}