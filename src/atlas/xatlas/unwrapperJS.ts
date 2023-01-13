import {BaseUVUnwrapper} from "./UVUnwrapper";
import {XAtlasJS} from "./XAtlasJS";

export class UVUnwrapper extends BaseUVUnwrapper{
    protected _createXAtlas() {
        return new XAtlasJS()
    }

}
