import { BoxBufferGeometry, BufferAttribute, Mesh } from 'three';
import { UVUnwrapper } from 'xatlas-three';
const unwrapper = new UVUnwrapper({ BufferAttribute: BufferAttribute }, {} , {}, false);

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
    console.log(meshs);
	const geometry = meshs.map(mesh => {
        console.log(mesh.geometry.attributes["position"].array.length);
        mesh.geometry = mergeVertices(mesh.geometry);
        
        console.log(mesh.geometry.attributes["position"].array.length);
        // mesh.geometry = new BoxBufferGeometry(1, 1, 1);
        return mesh.geometry;
    });
    // We can pass in options to the unwrapper
	unwrapper.packOptions.padding = 1;

    

    // Write the shared UVs the uv2 attribute
	await unwrapper.packAtlas(geometry, 'uv2', 'uv');

    geometry[0].computeVertexNormals();
    geometry[0].normalizeNormals();
    geometry[0].computeTangents();
}

function mergeVertices( geometry, tolerance = 1e-4 ) {

	tolerance = Math.max( tolerance, Number.EPSILON );

	// Generate an index buffer if the geometry doesn't have one, or optimize it
	// if it's already available.
	const hashToIndex = {};
	const indices = geometry.getIndex();
	const positions = geometry.getAttribute( 'position' );
	const vertexCount = indices ? indices.count : positions.count;

	// next value for triangle indices
	let nextIndex = 0;

	// attributes and new attribute arrays
	const attributeNames = Object.keys( geometry.attributes );
	const tmpAttributes = {};
	const tmpMorphAttributes = {};
	const newIndices = [];
	const getters = [ 'getX', 'getY', 'getZ', 'getW' ];
	const setters = [ 'setX', 'setY', 'setZ', 'setW' ];

	// Initialize the arrays, allocating space conservatively. Extra
	// space will be trimmed in the last step.
	for ( let i = 0, l = attributeNames.length; i < l; i ++ ) {

		const name = attributeNames[ i ];
		const attr = geometry.attributes[ name ];

		tmpAttributes[ name ] = new BufferAttribute(
			new attr.array.constructor( attr.count * attr.itemSize ),
			attr.itemSize,
			attr.normalized
		);

		const morphAttr = geometry.morphAttributes[ name ];
		if ( morphAttr ) {

			tmpMorphAttributes[ name ] = new BufferAttribute(
				new morphAttr.array.constructor( morphAttr.count * morphAttr.itemSize ),
				morphAttr.itemSize,
				morphAttr.normalized
			);

		}

	}

	// convert the error tolerance to an amount of decimal places to truncate to
	const decimalShift = Math.log10( 1 / tolerance );
	const shiftMultiplier = Math.pow( 10, decimalShift );
	for ( let i = 0; i < vertexCount; i ++ ) {

		const index = indices ? indices.getX( i ) : i;

		// Generate a hash for the vertex attributes at the current index 'i'
		let hash = '';
		for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

			const name = attributeNames[ j ];
			const attribute = geometry.getAttribute( name );
			const itemSize = attribute.itemSize;

			for ( let k = 0; k < itemSize; k ++ ) {

				// double tilde truncates the decimal value
				hash += `${ ~ ~ ( attribute[ getters[ k ] ]( index ) * shiftMultiplier ) },`;

			}

		}

		// Add another reference to the vertex if it's already
		// used by another index
		if ( hash in hashToIndex ) {

			newIndices.push( hashToIndex[ hash ] );

		} else {

			// copy data to the new index in the temporary attributes
			for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

				const name = attributeNames[ j ];
				const attribute = geometry.getAttribute( name );
				const morphAttr = geometry.morphAttributes[ name ];
				const itemSize = attribute.itemSize;
				const newarray = tmpAttributes[ name ];
				const newMorphArrays = tmpMorphAttributes[ name ];

				for ( let k = 0; k < itemSize; k ++ ) {

					const getterFunc = getters[ k ];
					const setterFunc = setters[ k ];
					newarray[ setterFunc ]( nextIndex, attribute[ getterFunc ]( index ) );

					if ( morphAttr ) {

						for ( let m = 0, ml = morphAttr.length; m < ml; m ++ ) {

							newMorphArrays[ m ][ setterFunc ]( nextIndex, morphAttr[ m ][ getterFunc ]( index ) );

						}

					}

				}

			}

			hashToIndex[ hash ] = nextIndex;
			newIndices.push( nextIndex );
			nextIndex ++;

		}

	}

	// generate result BufferGeometry
	const result = geometry.clone();
	for ( const name in geometry.attributes ) {

		const tmpAttribute = tmpAttributes[ name ];

		result.setAttribute( name, new BufferAttribute(
			tmpAttribute.array.slice( 0, nextIndex * tmpAttribute.itemSize ),
			tmpAttribute.itemSize,
			tmpAttribute.normalized,
		) );

		if ( ! ( name in tmpMorphAttributes ) ) continue;

		for ( let j = 0; j < tmpMorphAttributes[ name ].length; j ++ ) {

			const tmpMorphAttribute = tmpMorphAttributes[ name ][ j ];

			result.morphAttributes[ name ][ j ] = new BufferAttribute(
				tmpMorphAttribute.array.slice( 0, nextIndex * tmpMorphAttribute.itemSize ),
				tmpMorphAttribute.itemSize,
				tmpMorphAttribute.normalized,
			);

		}

	}

	// indices

	result.setIndex( newIndices );

	return result;

}
