class Rencontre{

    constructor(intitule, tournoi, dateR, lieu, equipe1, equipe2, score, j1Eqp1, j2Eqp1, j3Eqp1, j1Eqp2, j2Eqp2, j3Eqp2) {

        this.intitule = intitule;
        this.tournoi = tournoi;
        this.date = dateR;
        this.lieu = lieu;
        this.equipe1 = equipe1;
        this.equipe2 = equipe2;
        this.score = score;
        this.j1Eqp1 = j1Eqp1;
        this.j2Eqp1 = j2Eqp1;
        this.j3Eqp1 = j3Eqp1;
        this.j1Eqp2 = j1Eqp2;
        this.j2Eqp2 = j2Eqp2;
        this.j3Eqp2 = j3Eqp2;

    }

    infosRencontre() {

        return 'Intitule: ${this.intitule} | Tournoi: ${this.tournoi} | Date: ${this.date} | Lieu: ${this.lieu} | Equipe1: ${this.equipe1} | Equipe2: ${this.equipe2} | Score: ${this.score} | J1_Equipe1: ${this.j1Eqp1} | J2_Equipe1: ${this.j2Eqp1} | J3_Equipe1: ${this.j3Eqp1} | J1_Equipe2: ${this.j1Eqp2} | J2_Equipe2: ${this.j2Eqp2} | J3_Equipe2: ${this.j3Eqp2}.'

    }

}

class Equipe{

    constructor(intitule, joueur1, joueur2, joueur3, drapeau) {

        this.intitule = intitule;
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.joueur3 = joueur3;
        this.drapeau = drapeau;

    }

    infosEquipe() {

        return 'Intitule: ${this.intitule} | Joueur1: ${this.joueur1} | Joueur2: ${this.joueur2} | Joueur3: ${this.joueur3} | Drapeau: ${this.drapeau}.'

    }

}


class Tournoi{

    constructor(nom, designation, lieu, dte_deb, dte_fin, resultat) {

        this.nom = nom;
        this.designation = designation;
        this.lieu = lieu;
        this.dte_deb = dte_deb;
        this.dte_fin = dte_fin;
        this.resultat = resultat;

    }

    infosTournoi() {

        return 'Nom: ${this.nom} | Designation: ${this.designation} | Lieu: ${this.lieu} | Date_debut: ${this.dte_deb} | Date_fin: ${this.dte_fin} | Resultat: ${this.resultat}.'

    }

}
class News{

    constructor(Titre, categorie, descriptif) {

        this.Titre = Titre;
        this.categorie = categorie;
        this.descriptif = descriptif;

    }

    infosNews() {

        return 'Titre: ${this.Titre} | categorie: ${this.categorie} | descriptif: ${this.descriptif}.'

    }

}