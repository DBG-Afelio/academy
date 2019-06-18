import { ImageListModel } from './../model/image-list.model';
import { ThumbnailsView } from '../view/Thumbnails.view';
import {tab_img} from '../data/sourceJSON';
import { ImageInfosModel } from '../model/Image-infos.model';


export class AppViewModel {
    private list: ImageListModel;
    private thumbView: ThumbnailsView;
    constructor () {
        this.list = new ImageListModel(tab_img);
        this.thumbView = new ThumbnailsView(document.querySelector('#thumbnails'), document.querySelector('#thumbnails .thumb'));
    }

    public run() {
        this.thumbView.render(this.list.list, (imgInfo: ImageInfosModel, e: Event) => {
            this.thumbView.setSelectedId(imgInfo.id);

            console.log(this, imgInfo, e);

        });
    }
}
