export class Inscrire{

    password?: string;
    individu:
        {
            matricule?: string;
            nom?: string;
            prenom?: string;
            contact?: number;
            mail?: string;
            lieuNaiss?: string;
            dateNaiss?: number;
            cin?: number;
            sexe?: string;
            status:
                {
                    idStatus?: number;
                    libelleStatus?: string;
                };
            national?: string;
            secteurActivite:
                {
                    idSecteur?:number;
                    libelle?: string;
                };
            modePaiement:
                {
                    idModePaiement?:number;
                    banque?: string;
                    typeModePaiement:
                        {
                            idTypeMdp?: number;
                            libelleMdp?: string;
                        }
                };
            adresse:
                {
                    codeAdresse?:number;
                    lot?: string;
                    fokontany?: string;
                };
            imgIndividu?: any;
        };



}
