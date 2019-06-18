import { ImageInfosModel } from './app/model/image-infos.model';
import { ImageInfosListModel } from './app/model/image-infos-list.model';
import { tab_img } from './app/data/sourceJSON';

const list = new ImageInfosListModel(tab_img);

// (<HTMLImageElement>document.querySelector('.thumb')).src = `./assets/img/${list.getById(4).image.petite}`;
createThumbList(list);
(<HTMLImageElement>document.querySelector('.moyenne')).src = `./assets/img/${list.getById(4).image.moyenne}`;
document.querySelector('#titre').textContent = list.getById(4).titre;
document.querySelector('#auteur').textContent = list.getById(4).auteur;
document.querySelector('#commentaire').textContent = list.getById(4).commentaire;
document.querySelector('#pays').textContent = list.getById(4).pays;
document.querySelector('#prix').textContent = list.getById(4).prix + '€';


function createThumbList (listInfo: ImageInfosListModel) {
    const img = <HTMLImageElement>document.querySelector('.thumb');
    const parent = img.parentNode;
    parent.removeChild(img);
    listInfo.list.forEach((imgInfo: ImageInfosModel) => {
        const tmp = <HTMLImageElement>img.cloneNode(true);
        tmp.src = `./assets/img/${imgInfo.image.petite}`;
        parent.appendChild(tmp);
    });
}
