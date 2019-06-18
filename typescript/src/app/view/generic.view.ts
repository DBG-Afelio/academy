export abstract class GenericView {
    constructor(protected outNode: Element) {
    }

    cleanView() {
        this.outNode.childNodes.forEach((child: ChildNode) => {
            this.outNode.removeChild(<Node>child);
        });
    }

}
