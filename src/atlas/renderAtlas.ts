import { DoubleSide, FloatType, Mesh, NearestFilter, Object3D, OrthographicCamera, ShaderMaterial, Uniform, Vector2, WebGLRenderer, WebGLRenderTarget } from 'three';

const worldPositionVertexShader =`
    uniform vec2 offset;
    attribute vec2 uv2;
    centroid varying vec4 vWorldPosition; 
    varying vec3 vNormal;


    void main() {
        vWorldPosition = modelMatrix * vec4(position, 1.0) ;

        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0); 
    }
`;

const worldPositionFragmentShader = `
    varying vec4 vWorldPosition; 
    varying vec3 vNormal;

    void main() {
        gl_FragColor = vWorldPosition;
    }
`;


const worldPositionMaterial = new ShaderMaterial({
    vertexShader: worldPositionVertexShader,
    fragmentShader: worldPositionFragmentShader,
    side: DoubleSide,
    fog: false,
    uniforms: {
        offset: new Uniform(new Vector2(0,0))
    }
})


const normalVertexShader =`
    varying vec4 vNormal;
    attribute vec2 uv2;
    uniform vec2 offset;

    void main() {
        vNormal = normalize(modelMatrix * vec4(normal, 0.0));

        gl_Position = vec4((uv2 + offset) * 2.0 - 1.0, 0.0, 1.0);
    }
`;

const normalFragmentShader = `
    varying vec4 vWorldPosition; 
    varying vec4 vNormal;

    void main() {
        gl_FragColor = normalize(vNormal);//vec4(0.0, 0.0, 1.0, 1.0);
    }
`;


const normalMaterial = new ShaderMaterial({
    vertexShader: normalVertexShader,
    fragmentShader: normalFragmentShader,
    side: DoubleSide,
    fog: false,
    uniforms: {
        offset: new Uniform(new Vector2(0,0))
    }
})

const offsets =
[
    { x: -2, y: -2 },
    { x: 2, y: -2 },
    { x: -2, y: 2 },
    { x: 2, y: 2 },

    { x: -1, y: -2 },
    { x: 1, y: -2 },
    { x: -2, y: -1 },
    { x: 2, y: -1 },
    { x: -2, y: 1 },
    { x: 2, y: 1 },
    { x: -1, y: 2 },
    { x: 1, y: 2 },

    { x: -2, y: 0 },
    { x: 2, y: 0 },
    { x: 0, y: -2 },
    { x: 0, y: 2 },

    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: -1, y: 1 },
    { x: 1, y: 1 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },

    { x: 0, y: 0 },
];

export const renderAtlas = (renderer: WebGLRenderer, meshs: Mesh[], resolution: number, dialate: boolean = true) => {

    const renderWithShader = (material: ShaderMaterial): [ WebGLRenderTarget, Float32Array ] => {
        const target = new WebGLRenderTarget(resolution, resolution, {type: FloatType, magFilter: NearestFilter, minFilter: NearestFilter});

        // Create orthographic camera with large clip area to prevent clipping the geometry
        // I'm don't know a better way to do this :(
        const orthographicCamera = new OrthographicCamera(-100, 100, -100, 100, -100, 200);
        orthographicCamera.updateMatrix();

        // Re-create objects with util material - Maybe we could just change the material on the fly?
        const lightMapMeshes = new Object3D();

        for (const mesh of meshs) {
            const lightMapMesh = mesh.clone();
            lightMapMesh.material = material;
            lightMapMeshes.add(lightMapMesh);
        }

        // Setup renderer
        renderer.autoClear = false;
        renderer.setRenderTarget(target);
        renderer.setClearColor(0, 0);
        renderer.clear()

        if(dialate) {
            for (const offset of offsets) {
                material.uniforms.offset.value.x = offset.x * (1 / resolution);
                material.uniforms.offset.value.y = offset.y * (1 / resolution);
                renderer.render(lightMapMeshes, orthographicCamera)
            }
        }

        material.uniforms.offset.value.x = 0;
        material.uniforms.offset.value.y = 0;
        renderer.render(lightMapMeshes, orthographicCamera)

        renderer.setRenderTarget(null);
        
        return [ target, null ];
    }

    const [ positionTexture, worldPositions ] = renderWithShader(worldPositionMaterial);
    const [ normalTexture, normalPositions ] = renderWithShader(normalMaterial);

    return {
        positionTexture,
        positions: worldPositions,
        normalTexture,
        normals: normalPositions
    };
};