import { ImageInfosModel } from './image-infos.model';

export class ImageInfosListModel {
    public list: ImageInfosModel[];

    constructor(dto: ImageInfosInterface[]) {
        this.list = dto.map((img) => new ImageInfosModel(img));
    }

    getById(id: number): ImageInfosModel {
        return this.list.filter((img: ImageInfosModel) => {
             return img.id === id;
            })[0];
    }
}
