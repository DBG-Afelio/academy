import {tab_img} from './app/data/sourceJSON';

(<HTMLImageElement>document.querySelector('#thumbnails img')).src = `assets/img/${ tab_img[0].image.petite }`;