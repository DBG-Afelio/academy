import { ImageInfosModel } from './image-infos.model';
export class Article {

    constructor(public nb: number, public img: ImageInfosModel) {}

    public getPrixTotal(): number {
        return this.nb * this.img.prix;
    }
}