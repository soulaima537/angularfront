import { Appeloffre } from "./appeloffre";
export class DevisFournisseur {
    idDevisFourniseur :number;
    Ptotal :number;
    PTSansRemise: number;
    etat: number;
    periodeValidite: number;
    delaiLivraison: number;
    remise: number;
    commentaire: string;
    disopnible: boolean;
    pourcentageRemise: number;
    prixInitiale: number;
    appeloffres:Appeloffre;


    constructor(idDevisFourniseur :number,
        Ptotal :number, PTSansRemise: number,etat: number, periodeValidite: number, delaiLivraison: number, remise: number, commentaire: string, disopnible: boolean, pourcentageRemise: number, prixInitiale: number){
            this.idDevisFourniseur=idDevisFourniseur;
            this.Ptotal=Ptotal;
            this.PTSansRemise=PTSansRemise;
            this.etat=etat;
            this.periodeValidite=periodeValidite;
            this.delaiLivraison=delaiLivraison;
            this.remise=remise;
            this.commentaire=commentaire;
            this.disopnible=disopnible;
            this.pourcentageRemise=pourcentageRemise;
            this.prixInitiale=prixInitiale;
        }
}
