export class ImageInfosModel {
    public readonly titre: string;
    public readonly auteur: string;
    public readonly commentaire: string;
    public readonly pays: string;
    public readonly prix: number;
    public readonly image: ImageDTO;
    public readonly id: number;

    constructor (dto: ImageInfosDTO) {
        this.titre = dto.titre;
        this.auteur = dto.auteur;
        this.commentaire = dto.commentaire;
        this.pays = dto.Pays;
        this.prix = parseFloat(dto.Prix);
        this.image = dto.image ;
        this.id = dto.id ;
    }
}