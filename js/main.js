const navlinks =[...document.querySelectorAll("ul li")]
// creation de tableau pour utiliser des methodes de tableau
const sections =[...document.querySelectorAll("section")]
let sectionsPositions;
// scroll smooth
function positionCalculation(){
    sectionsPositions = sections.map(sections => sections.offsetTop)
}
positionCalculation()
console.log(sectionsPositions);

navlinks.forEach(link => link.addEventListener("click", ajoutScrollLent))

function ajoutScrollLent(e){
    const linkindex = navlinks.indexOf(e.target);
    window.scrollTo({
        top:sectionsPositions[linkindex],
        behavior:"smooth"
    })
};

// suivi et add remove du menu
const sect1 = document.querySelector('.Home')
const sect3 = document.querySelector('.champ')
const sect4 = document.querySelector('.Teams')
const sect2 = document.querySelector('.News')
const navbar = document.getElementById('menu')
const section1 = document.getElementById('Home')
const section2 = document.getElementById('championship')
const section3 = document.getElementById('Teams')
const section4 = document.getElementById('News')
let height1 = section1.clientHeight;
let height2 = section2.clientHeight;
let height3 = section3.clientHeight;
let height4 = section4.clientHeight;


window.addEventListener('scroll',() =>{
    if(window.scrollY <= 0){
        sect1.classList.add('active');
        sect4.classList.remove('active');
        sect2.classList.remove('active');
        sect3.classList.remove('active');
        navbar.classList.remove('color');
    } 
    else if(window.scrollY <= height1){
        sect2.classList.add('active');
        sect1.classList.remove('active');
        sect4.classList.remove('active');
        sect3.classList.remove('active');
        navbar.classList.remove('color');
    }
    else if(window.scrollY <= height2 + height1){
        sect3.classList.add('active');
        sect2.classList.remove('active');
        sect4.classList.remove('active');
        sect1.classList.remove('active');
        navbar.classList.add('color');

    }
    else if(window.scrollY <= height3 + height2 + height1){
        sect4.classList.add('active');
        navbar.classList.remove('color');
        sect3.classList.remove('active');
        sect1.classList.remove('active');
        sect2.classList.remove('active');

    }
})
// tableau avec systeme d'onglets
const tabs = [...document.querySelectorAll('.tab')]

tabs.forEach(tab => tab.addEventListener("click", tabsAnimation))

const tabContents = [...document.querySelectorAll(".tab-content")]

function tabsAnimation(e){

  const indexToRemove = tabs.findIndex(tab => tab.classList.contains("active-tab"))

  tabs[indexToRemove].setAttribute("aria-selected", "false")
  tabs[indexToRemove].setAttribute("tabindex", "-1")
  tabs[indexToRemove].classList.remove("active-tab");
  tabContents[indexToRemove].classList.remove("active-tab-content");

  const indexToShow = tabs.indexOf(e.target)

  tabs[indexToShow].setAttribute("tabindex", "0")
  tabs[indexToShow].setAttribute("aria-selected", "true")
  tabs[indexToShow].classList.add("active-tab")
  tabContents[indexToShow].classList.add("active-tab-content")
}

tabs.forEach(tab => tab.addEventListener("keydown", arrowNavigation))

let tabFocus = 0;
function arrowNavigation(e){

  if(e.keyCode === 39 || e.keyCode === 37) {
    tabs[tabFocus].setAttribute("tabindex", -1)

    if(e.keyCode === 39) {
      tabFocus++;

      if(tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    } else if (e.keyCode === 37) {
      tabFocus--;

      if(tabFocus < 0) {
        tabFocus = tabs.length -1;
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0)
    tabs[tabFocus].focus()
  }

}
const flag = document.querySelector('.drapeau');
const modal = document.querySelector('.Modal');

function toggle() {
    modal.classList.toggle('modalAdd');
}
function toggleStop() {
    modal.classList.toggle('modalAdd');
}
const menuLateral = document.getElementById('menulateral');
function menuBurger() {
    menuLateral.classList.toggle('translate');
}



function chargementIndex(){

    if (localStorage.length > 0) {

        let listeImages = [];

        for( let i = 0; i < localStorage.length; i++){

            let index = localStorage.key(i);
            let checkEquipe = index.indexOf("equipe-");

            if (checkEquipe != -1) {

                let strEquipe = localStorage.getItem(index);
                let equipe = JSON.parse(strEquipe);
                
                let cheminImg= equipe.drapeau;
                let tblImg = cheminImg.split("\\");
                let nomImg = tblImg[2];

                listeImages.push(nomImg);

            }

        }

        let contenuDrapeaux = "";

        listeImages.forEach((element) => {
            contenuDrapeaux= contenuDrapeaux+'<div class="drapeau" onclick="toggle()"><img src="./img/'+element+'" alt="photo drapeau"></div>'
        });

        const conteneurDrapeau = document.querySelector('#Bdrapeau');

        conteneurDrapeau.insertAdjacentHTML("beforerend",contenuDrapeaux);

    }

}