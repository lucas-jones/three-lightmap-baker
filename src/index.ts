import { LoadTexture } from './utils/LoaderUtils';
import { LightBakerExample } from './LightBakerExample';
import { loadXAtlasThree } from './atlas/generateAtlas';


(async () => {
    await loadXAtlasThree();
    const uvDebugTexture = await LoadTexture("uv_map.jpg");
    
    const app = new LightBakerExample(uvDebugTexture);
    window.addEventListener('resize', () => {
        app.updateSize();
    });
})();
