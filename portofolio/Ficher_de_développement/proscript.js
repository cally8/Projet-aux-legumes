//Page principale: Acceuil




//Commander

// Le saviez-vous 
var culture = [];

function afficherDetails(produitId) {
    var laCultureElement = document.getElementById('laCulture' + produitId.slice(-1));
    laCultureElement.style.display = 'block';
}

function fermerLeContenu(produitId) {
    var laCultureElement = document.getElementById('laCulture' + produitId.slice(-1));
    laCultureElement.style.display = 'none';
}
//Panier de commande
let openShopping = document.querySelector('.shopping');
let fermerShopping = document.querySelector('.fermerShopping');
let list = document.querySelector('.list');
let listPanier= document.querySelector('.listPanier');
let total= document.querySelector('.total');
let header =document.querySelector('header');
let main = document.querySelector('main')
let quantité = document.querySelector('.quantité');

let products = []

// openShopping.addEventListener('click', ()=> {
//     header.classList.add('active');
// })
// fermerShopping.addEventListener('click', ()=> {
//     main.classList.remove('active');
// })


//Panier

// Afficher les éléments de "Le saviez-vous"



// Nous-contacter//

//Calendrier_de_saison //

//Connecter//