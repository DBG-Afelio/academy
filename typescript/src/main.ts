import { ImageInfosModel } from './app/model/image-infos.model';
import { ImageInfosListModel } from './app/model/image-infos-list.model';
import { tab_img } from './app/data/sourceJSON';
import { Panier } from './app/model/panier.model';

const list = new ImageInfosListModel(tab_img);
const panier = new Panier();
let idSelected: number;
// (<HTMLImageElement>document.querySelector('.thumb')).src = `./assets/img/${list.getById(4).image.petite}`;
createThumbList(list);
displayDetail(1);
initPanier(panier);


function createThumbList (listInfo: ImageInfosListModel) {
    const img = <HTMLImageElement>document.querySelector('.thumb');
    const parent = img.parentNode;
    parent.removeChild(img);
    listInfo.list.forEach((imgInfo: ImageInfosModel) => {
        const tmp = <HTMLImageElement>img.cloneNode(true);
        tmp.src = `./assets/img/${imgInfo.image.petite}`;
        tmp.addEventListener('click', (e: Event) => {
            displayDetail(imgInfo.id);
        });
        parent.appendChild(tmp);
    });
}

function displayDetail( id: number) {

    idSelected = id;
    const elm = list.getById(id);
    (<HTMLImageElement>document.querySelector('.moyenne')).src = `./assets/img/${elm.image.moyenne}`;
    document.querySelector('#titre').textContent = elm.titre;
    document.querySelector('#auteur').textContent = elm.auteur;
    document.querySelector('#commentaire').textContent = elm.commentaire;
    document.querySelector('#pays').textContent = elm.pays;
    document.querySelector('#prix').textContent = elm.prix + '€';
}

function initPanier(panier: Panier) {
    document.querySelector('#nb').addEventListener('change', (e: Event) => {
        const nb = Number((<HTMLInputElement>e.target).value);
        if (isFinite(nb)) {
            panier.addArticle(nb, list.getById(idSelected));
            refreshViewPanier();
        }
    });
}

function refreshViewPanier() {
    document.querySelector('.total').textContent = panier.getPrixTotal() + '€';
    console.log(panier);
}
