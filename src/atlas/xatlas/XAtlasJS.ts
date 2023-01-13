// @ts-ignore
import {XAtlasAPI} from "xatlasjs";
import {BaseXAtlas} from "./baseXAtlas";

export class XAtlasJS extends BaseXAtlas {

    init(onLoad: () => void, onProgress: (mode: any, progress: any) => void, wasmFilePath: string): void {
        if (this.api) return
        this.api = new XAtlasAPI()(
            onLoad,
            (path: string, dir: string) => (path === "xatlas_web.wasm" ? wasmFilePath : path + dir),
            onProgress,
        )
    }
}
