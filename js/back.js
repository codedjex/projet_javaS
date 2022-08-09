function ajoutRencontre(form) {

    let intitule = form.intitule.value;
    let tournoi = form.tournoi.value;
    let dateR = form.dateR.value;
    let lieu = form.lieu.value;
    let equipe1 = form.equipe1.value;
    let equipe2 = form.equipe2.value;
    let score = form.score.value;
    let j1Eqp1 = form.j1E1.value;
    let j2Eqp1 = form.j2E1.value;
    let j3Eqp1 = form.j3E1.value;
    let j1Eqp2 = form.j1E2.value;
    let j2Eqp2 = form.j2E2.value;
    let j3Eqp2 = form.j3E2.value;

    let index = 'rencontre-'+ tournoi + '_' + intitule + '_' + dateR;
    let rencontre1 = new Rencontre(intitule, tournoi, dateR, lieu, equipe1, equipe2, score, j1Eqp1, j2Eqp1, j3Eqp1, j1Eqp2, j2Eqp2, j3Eqp2);
    let strRencontre = JSON.stringify(rencontre1);

    localStorage.setItem(index, strRencontre);

}


function ajoutEquipe(form) {

    let intitule = form.intitule.value;
    let joueur1 = form.j1.value;
    let joueur2 = form.j2.value;
    let joueur3 = form.j3.value;
    let drapeau = form.drapeau.value;

    let index = "equipe-" + intitule;
    let equipe1 = new Equipe(intitule, joueur1, joueur2, joueur3, drapeau);
    let strEquipe = JSON.stringify(equipe1);

    localStorage.setItem(index, strEquipe);

}


function ajoutTournoi() {

    let nom = document.getElementById("nom").value;
    let description = document.getElementById("description").value;
    let lieu = document.getElementById("lieu").value;
    let dte_deb = document.getElementById("dte_deb").value;
    let dte_fin = document.getElementById("dte_fin").value;

    var resultat = [];
 
    for (var option of document.getElementById('select').options) {
        resultat.push(option.value);
    }

    let index = "tournoi-" + nom;
    let tournoi1 = new Tournoi(nom, description, lieu, dte_deb, dte_fin, resultat);
    let strTournoi = JSON.stringify(tournoi1);

    localStorage.setItem(index, strTournoi);

}
function ajoutNew(form) {

    let Titre = form.Titre.value;
    let categorie = form.categorie.value;
    let descriptif = form.descriptif.value;


    let index = "Actualité-" + Titre;
    let New1 = new News(Titre, categorie, descriptif);
    let strNew = JSON.stringify(New1);

    localStorage.setItem(index, strNew);

}




function supprimer(event) {

    var trid = $(event.target).closest('tr').attr('id'); // table row ID 
    var deleteLine = document.getElementById(trid);
    
    deleteLine.remove();
    localStorage.removeItem(trid);

}



function chargementTableau(typeContenu) {

    if (localStorage.length > 0) {

        for( let i = 0; i < localStorage.length; i++){

            if(typeContenu == 'rencontres') {

                let index = localStorage.key(i);
                let checkRencontre = index.indexOf("rencontre-");
                
                if (checkRencontre != -1) {

                    let strRencontre = localStorage.getItem(index);
                    let rencontre = JSON.parse(strRencontre);

                    const tbodyRef = document.getElementById('maTable').getElementsByTagName('tbody')[0];

                    let tbodyRowCount = tbodyRef.rows.length;

                    var row = tbodyRef.insertRow(tbodyRowCount);
                    let indexRencontre = 'rencontre-'+ rencontre.tournoi + '_' + rencontre.intitule + '_' + rencontre.date;
                    row.id = indexRencontre;
                    row.className = "align-middle text-center"
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);

                    cell1.innerHTML = rencontre.tournoi;
                    cell2.innerHTML = rencontre.intitule;
                    cell3.innerHTML = rencontre.date;
                    cell4.innerHTML = rencontre.score;
                    cell5.innerHTML = '<input type="button" class="open_modal" value="Voir" onclick="afficherRencontre(event)" ><input type="button" value="Supprimer" onclick="supprimer(event)" >';

                }

            } else if (typeContenu == 'equipes') {

                let index = localStorage.key(i);
                let checkEquipe = index.indexOf("equipe-");

                if (checkEquipe != -1) {

                    let strEquipe = localStorage.getItem(index);
                    let equipe = JSON.parse(strEquipe);

                    const tbodyRef = document.getElementById('maTable').getElementsByTagName('tbody')[0];

                    let tbodyRowCount = tbodyRef.rows.length;

                    var row = tbodyRef.insertRow(tbodyRowCount);
                    let indexEquipe = 'equipe-' + equipe.intitule;
                    row.id = indexEquipe;
                    row.className = "align-middle text-center"
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);

                    let cheminImg= equipe.drapeau;
                    let tblImg = cheminImg.split("\\");
                    let nomImg = tblImg[2];

                    cell1.innerHTML = equipe.intitule;
                    cell2.innerHTML = '<img src="./../img/'+nomImg+'" alt="'+nomImg+'">';
                    cell3.innerHTML = equipe.joueur1;
                    cell4.innerHTML = equipe.joueur2;
                    cell5.innerHTML = equipe.joueur3;
                    cell6.innerHTML = '<input type="button" value="Supprimer" onclick="supprimer(event)" >';

                }

            } else if (typeContenu == 'tournois') {

                let index = localStorage.key(i);
                let checkTournoi = index.indexOf("tournoi-");

                if (checkTournoi != -1) {

                    let strTournoi = localStorage.getItem(index);
                    let tournoi = JSON.parse(strTournoi);

                    const tbodyRef = document.getElementById('maTable').getElementsByTagName('tbody')[0];

                    let tbodyRowCount = tbodyRef.rows.length;

                    var row = tbodyRef.insertRow(tbodyRowCount);
                    let indexTournoi = 'tournoi-' + tournoi.nom;
                    row.id = indexTournoi;
                    row.className = "align-middle text-center"
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);

                    cell1.innerHTML = tournoi.nom;
                    cell2.innerHTML = tournoi.designation;
                    cell3.innerHTML = tournoi.lieu;
                    cell4.innerHTML = tournoi.dte_deb;
                    cell5.innerHTML = tournoi.dte_fin;
                    cell6.innerHTML = '<input type="button" class="open_modal" value="Voir" onclick="afficherTournoi(event)" ><input type="button" value="Supprimer" onclick="supprimer(event)" >';

                }



            }else if (typeContenu == 'News') {

                let index = localStorage.key(i);
                let checkNew = index.indexOf("Actualité-");

                if (checkNew != -1) {

                    let strNew = localStorage.getItem(index);
                    let New = JSON.parse(strNew);

                    const tbodyRef = document.getElementById('maTable').getElementsByTagName('tbody')[0];

                    let tbodyRowCount = tbodyRef.rows.length;

                    var row = tbodyRef.insertRow(tbodyRowCount);
                    let indexNew = 'Actualité-' + New.Titre;
                    row.id = indexNew;
                    row.className = "align-middle text-center"
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);

                    cell1.innerHTML = New.Titre;
                    cell2.innerHTML =New.categorie;
                    cell3.innerHTML = New.descriptif;
                    cell4.innerHTML = '<input type="button" value="Supprimer" onclick="supprimer(event)" >';
                }
            }   
        }

    }

}




var modal = document.getElementById("Vue_Modal");
var fermeture = document.getElementsByClassName("close")[0];

function afficherRencontre(event){

    let myId = $(event.target).closest('tr').attr('id');
    let contenu = "";

    if (localStorage.length > 0) {

        for( let i = 0; i < localStorage.length; i++){

            let index = localStorage.key(i);

            if (index == myId){

                let strRencontre = localStorage.getItem(index);
                let rencontre = JSON.parse(strRencontre);

                contenu = '<form id="form-modal" class="form-ajout" name="formulaire"><div class="row mt-4 mb-3"><div class="col"><label class="form-label">Tournoi : </label>'+
                                '<label class="form-label">'+rencontre.tournoi+'</label></div><div class="col"><label class="form-label">Intitulé : </label>'+
                                '<label class="form-label">'+rencontre.intitule+'</label></div></div><div class="row mt-4 mb-3"><div class="col">'+
                                '<label class="form-label">Date : </label><label class="form-label">'+rencontre.date+'</label></div><div class="col">'+
                                '<label class="form-label">Lieu : </label><label class="form-label">'+rencontre.lieu+'</label></div></div><div class="row mt-4 mb-3">'+
                                '<div class="col-6"><label class="form-label">Score : </label><label class="form-label">'+rencontre.score+'</label>'+
                                '</div></div><div class="row mt-4 mb-3"><div class="col"><div class="row"><label class="form-label">Equipe n°1 : </label></div><div class="row"><label class="form-label">'+
                                rencontre.equipe1+'</label></div><div class="row"><label class="form-label">J1 Equipe n°1 : </label></div><div class="row"><label class="form-label">'+rencontre.j1Eqp1+'</label>'+
                                '</div><div class="row"><label class="form-label">J2 Equipe n°1 : </label></div><div class="row"><label class="form-label">'+rencontre.j2Eqp1+'</label></div><div class="row"><label class="form-label">J3 Equipe n°1 : </label>'+
                                '</div><div class="row"><label class="form-label">'+rencontre.j3Eqp1+'</label></div></div><div class="col"><div class="row"><label class="form-label">Equipe n°2 : </label></div><div class="row"><label class="form-label">'+rencontre.equipe2+
                                '</label></div><div class="row"><label class="form-label">J1 Equipe n°2 : </label></div><div class="row"><label class="form-label">'+rencontre.j1Eqp2+'</label>'+
                                '</div><div class="row"><label class="form-label">J2 Equipe n°2 : </label></div><div class="row"><label class="form-label">'+rencontre.j2Eqp2+'</label></div><div class="row"><label class="form-label">J3 Equipe n°2 : </label>'+
                                '</div><div class="row"><label class="form-label">'+rencontre.j3Eqp2+'</label></div></div></div></form>'

                break;

            } 
    
        }

        let deleteform = document.getElementById("form-modal");
        if (deleteform != null){deleteform.remove();}
        document.getElementById('add_here').insertAdjacentHTML("afterend", contenu);
        modal.style.display = "flex";

    }

}

/*function afficherEquipe(event){

    let myId = $(event.target).closest('tr').attr('id');

    
    alert(myId);


    let contenu = "";

    if (localStorage.length > 0) {

        for( let i = 0; i < localStorage.length; i++){

            let index = localStorage.key(i);

            if (index == myId){

                let strEquipe = localStorage.getItem(index);
                let equipe = JSON.parse(strEquipe);

                contenu = '<form id="form-modal" class="form-ajout" name="formulaire"><div class="row mt-4 mb-3"><div class="col"><label class="form-label">Nom : </label>'+
                            '<label class="form-label">'+equipe.intitule+'</label></div></div><div class="row"><label class="form-label">Joueur n°1 : </label></div>'+
                            '<div class="row"><label class="form-label">'+equipe.joueur1+'</label></div><div class="row"><label class="form-label">Joueur n°2 : </label>'+
                            '</div><div class="row"><label class="form-label">'+equipe.joueur2+'</label></div><div class="row"><label class="form-label">Joueur n°3 : </label>'+
                            '</div><div class="row"><label class="form-label">'+equipe.joueur3+'</label></div></form>'

                break;

            } 
    
        }

        let deleteform = document.getElementById("form-modal");
        if (deleteform != null){deleteform.remove();}
        document.getElementById('add_here').insertAdjacentHTML("afterend", contenu);
        modal.style.display = "flex";

    }

}*/

function afficherTournoi(event){

    let myId = $(event.target).closest('tr').attr('id');
    let contenu = "";

    if (localStorage.length > 0) {

        for( let i = 0; i < localStorage.length; i++){

            let index = localStorage.key(i);

            if (index == myId){

                let strTournoi = localStorage.getItem(index);
                let tournoi = JSON.parse(strTournoi);

                let Result = "";

                tournoi.resultat.forEach((element) => {
                    Result= Result+'<option>'+element+'</option>'
                });

                contenu = '<form id="form-modal" class="form-ajout" name="formulaire"><div class="row mt-4 mb-3"><div class="col"><label class="form-label">Tournoi :</label>'+
                            '<label class="form-label">'+tournoi.nom+'</label></div><div class="col"><label class="form-label">Lieu :</label>'+
                            '<label class="form-label">'+tournoi.lieu+'</label></div></div><div class="row mt-4 mb-3"><div class="col"><label class="form-label">Description :</label>'+
                            '<label class="form-label">'+tournoi.designation+'</label></div></div><div class="row mt-4 mb-3"><div class="col">'+
                            '<label class="form-label">Date début :</label><label class="form-label">'+tournoi.dte_deb+'</label></div><div class="col">'+
                            '<label class="form-label">Date fin :</label><label class="form-label">'+tournoi.dte_fin+'</label></div></div><div class="row mt-4 mb-3">'+
                            '<div class="col-6"><select class="form-select" id="select" aria-label="Default select example" name="liste" size="5">'+Result+
                            '</select></div></div></form>'

                break;

            } 
    
        }

        let deleteform = document.getElementById("form-modal");
        if (deleteform != null){deleteform.remove();}
        document.getElementById('add_here').insertAdjacentHTML("afterend", contenu);
        modal.style.display = "flex";

    }

}

fermeture.onclick = function() {
    modal.style.display = "none";
  }

function ajoutRes(form) {        
    var o=new Option(form.equipe.value+' - '+form.resultat.value);        
    form.liste.options[form.liste.options.length]=o;    
}

function SupprimerTout(list) {        
    list.options.length=0;    
}

function Supprimer(list) {        
    if (list.options.selectedIndex>=0) {            
        list.options[list.options.selectedIndex]=null;        
    } else {            
        alert("Suppression impossible : aucune ligne sélectionnée");        
    }    
}