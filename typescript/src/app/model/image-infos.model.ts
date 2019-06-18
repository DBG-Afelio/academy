export class ImageInfosModel {
    public titre: string;
    public auteur: string;
    public commentaire: string;
    public pays: string;
    public prix: number;
    public image: ImageInterface;
    public id: number;

    constructor(dto: ImageInfosInterface) {
        this.titre = dto.titre;
        this.auteur = dto.auteur;
        this.commentaire = dto.commentaire;
        this.pays = dto.Pays;
        this.prix = parseFloat(dto.Prix);
        this.image = dto.image;
        this.id = dto.id;
    }
}
