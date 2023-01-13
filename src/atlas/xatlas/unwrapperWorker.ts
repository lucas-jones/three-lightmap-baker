import {BaseUVUnwrapper} from "./UVUnwrapper";
import {XAtlasWebWorker} from "./XAtlasWebWorker";

export class UVUnwrapper extends BaseUVUnwrapper{
    protected _createXAtlas(): any {
        return new XAtlasWebWorker()
    }
}
