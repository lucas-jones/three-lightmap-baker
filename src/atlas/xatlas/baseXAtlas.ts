export abstract class BaseXAtlas {
    api: any

    abstract init(onLoad: () => void, onProgress: (mode: any, progress: any) => void, wasmFilePath: string, workerFilePath?: string): void
}
