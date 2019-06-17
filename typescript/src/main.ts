import { ImageListModel } from './app/model/image-list.model';
import { ImageInfosModel } from './app/model/image-infos.model';
import {tab_img} from './app/data/sourceJSON';

const list: ImageListModel = new ImageListModel(tab_img);
const elm: ImageInfosModel = list.getImageInfoById(4);

(<HTMLImageElement>document.querySelector('#thumbnails img')).src = `assets/img/${ elm.image.petite }`;