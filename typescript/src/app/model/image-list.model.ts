import { ImageInfosModel } from './Image-infos.model';
export class ImageListModel {
    public readonly list: ImageInfosModel[];

    constructor(dto: ImageInfosDTO[]) {
        this.list = dto.map((elm) => new ImageInfosModel(elm));
    }

    getImageInfoById(id: number): ImageInfosModel {
        return this.list.filter((elm: ImageInfosModel) => elm.id === id)[0];
    }
}