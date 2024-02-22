import {Mesh } from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

export const mergeGeometry = (meshes: Mesh[]) => {
	return mergeGeometries(
		meshes.map((mesh) => {
			const lightmapMesh = new Mesh(mesh.geometry.clone(), mesh.material);

			// Todo: Put checks in
			lightmapMesh.geometry.deleteAttribute("color");
			lightmapMesh.geometry.applyMatrix4(mesh.matrixWorld);

			return lightmapMesh.geometry;
		})
	);
};
