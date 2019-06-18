import { ImageInfosModel } from './../model/image-infos.model';
import { GenericView } from './generic.view';

export class ThumbnailsView extends GenericView {

    private templateNode: Element;
    private ImageInfosModel: ImageInfosModel[];
    public selectedId: number;

    constructor(outNode: Element, model: Element) {
        super(outNode);
        this.templateNode = model.parentNode.removeChild(model);
        this.selectedId = 0;
    }

    public render(list: ImageInfosModel[], clickHandler: CallableFunction) {
        this.cleanView();
        const img = this.templateNode.cloneNode(true);
        list.forEach((imgInfo) => {
            const imgToAppend: Element = (<Element>img.cloneNode(true));
            imgToAppend.setAttribute('src', `./assets/img/${imgInfo.image.petite}`);
            imgToAppend.id = `thumb_${imgInfo.id}`;
            if (imgInfo.id === this.selectedId) {
                imgToAppend.classList.add('selected');
            }
            imgToAppend.addEventListener('click', (e) => {
                clickHandler(imgInfo, e);
            });
            this.outNode.appendChild(imgToAppend);
        });
    }

    public setSelectedId(id: number) {
        this.selectedId = id;
        const listImg = this.outNode.querySelectorAll('.thumb');
        listImg.forEach((img: Element) => {
            img.classList.remove('selected');
        });
        this.outNode.querySelector(`.thumb#thumb_${this.selectedId}`).classList.add('selected');
    }
}