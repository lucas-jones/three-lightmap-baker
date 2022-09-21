import { Lightmapper } from "./Lightmapper";

export const renderSampleCount = async (lightmapper: Lightmapper, samples: number = 10, onProgress?: (progress:number) => void) => {
	return new Promise<void>((resolve) => {
		let sampleIndex = 0;

		const sample = () => {
			lightmapper.render();

			sampleIndex++;
			
			onProgress?.(sampleIndex / samples);
	
			if (sampleIndex < samples) {
				requestAnimationFrame(sample);
			} else {
				resolve();
			}
		}
	
		sample();
	});
}

export const renderTime = async (lightmapper: Lightmapper, time: number = 1000, onProgress?: (progress:number) => void) => {
	return new Promise<void>((resolve) => {
		const startTime = Date.now();

		const sample = () => {
			lightmapper.render();
			
			onProgress?.((Date.now() - startTime) / time);
	
			if (Date.now() - startTime < time) {
				requestAnimationFrame(sample);
			} else {
				resolve();
			}
		}
	
		sample();
	});
}