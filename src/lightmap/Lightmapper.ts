import { FloatType, Matrix4, Mesh, OrthographicCamera, PlaneGeometry, Texture, TextureFilter, Vector3, WebGLRenderer, WebGLRenderTarget } from "three";
import { MeshBVH, MeshBVHOptions } from 'three-mesh-bvh';
import { LightmapperMaterial } from "./LightmapperMaterial";

export type RaycastOptions = {
	resolution: number,
	casts: number,
	lightPosition: Vector3,
	lightSize: number;
	filterMode: TextureFilter;
	
	directLightEnabled: boolean;
	indirectLightEnabled: boolean;
	ambientLightEnabled: boolean;
	ambientDistance: number;
}

export type Lightmapper = {
	renderTexture: WebGLRenderTarget,
	render: () => number,
}

export const generateLightmapper = (renderer: WebGLRenderer, positions: Texture, normals: Texture, bvh: MeshBVH, options: RaycastOptions): Lightmapper => {

	const raycastMaterial = new LightmapperMaterial({
		bvh,
		invModelMatrix: new Matrix4().identity(),
		positions,
		normals,
		casts: options.casts,
		lightPosition: options.lightPosition,
		lightSize: options.lightSize,
		opacity: 1,
		sampleIndex: 0,
		directLightEnabled: options.directLightEnabled,
		indirectLightEnabled: options.indirectLightEnabled,
		ambientLightEnabled: options.ambientLightEnabled,
		ambientDistance: options.ambientDistance,
	});

	const renderTexture = new WebGLRenderTarget(options.resolution, options.resolution, { type: FloatType, magFilter: options.filterMode, minFilter: options.filterMode });
	renderer.setRenderTarget(renderTexture);
	renderer.setClearColor(0xff0000, 0)
	renderer.clear();

	const raycastMesh = new Mesh(new PlaneGeometry(2, 2), raycastMaterial);
	const orthographicCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

	let totalSamples = 0;
	
	const render = () => {
		renderer.setRenderTarget(renderTexture);
		
		raycastMaterial.uniforms.sampleIndex.value = totalSamples;
		raycastMaterial.uniforms.opacity.value = totalSamples == 0 ? 1 : 1 / totalSamples;
		
		renderer.render(raycastMesh, orthographicCamera);

		renderer.setRenderTarget(null);

		totalSamples++;

		return totalSamples;
	}

	renderer.setRenderTarget(null);

	return {
		renderTexture,
		render
	};
}