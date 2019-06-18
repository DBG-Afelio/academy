import { ImageInfosModel } from './Image-infos.model';
import { Article } from './article.model';

export class Panier {
    liste: Article[];

    constructor() {
        this.liste = [];
    }

    addArticle (nb: number, img: ImageInfosModel): void {
        this.liste = [...this.liste, new Article(nb, img)];
    }

    getPrixTotal(): number {
        let somme = 0;
        this.liste.forEach((art: Article) => {
            somme += art.getPrixTotal();
        });
        return somme;
    }

    getNbTotal(): number {
        let somme = 0;
        this.liste.forEach((art: Article) => {
            somme += art.nb;
        });
        return somme;
    }
}
