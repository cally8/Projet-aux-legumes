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
//Ajouter articles dans un tableau
var panier = [];

function ajouterAuPanier (produit1) {
    var nouvelElement; //Cette variable va stocker les détails du produit qui sera ajouter au panier
    if (produit1 === 1) {
            nouvelElement = {
                id: 1,
                nom: "Avocats",
                prix: 2
        };
    } else if (produitId === 2) {
        nouvelElement = {
            id: 2,
            nom: "Avocats",
            prix: 4
        };

        panier.push(nouvelElelemnt);

        alert("Produit ajouter au panier !")
}}

//Afficher les produits dans le panier 
 var PAnier = {}; // Cet objet 'panier' va stocker les infos sur les articles

 function ajouterAuPanier(produit1, quantité) {
    if (panier.hasOwnProperty(produit1)) { //verifie que le produit = déja dans panier
        panier[produit1] += quantité; // Si oui, j'ajoute mon produit en plus
    } else {
        panier[produit1] = quantité; //sinon, je créer une nouvelle entrée pour le produit
    }
    document.getElementById('quantité').innerText = Object.values(panier).reduce((a,b)=> a + b, 0);
 }
 document.getElementById('quantité').innerText = Object.values(panier).reduce((a,b)=> a + b, 0);





//Panier

// Afficher les éléments de "Le saviez-vous"



// Nous-contacter//

//Calendrier_de_saison //

//Connecter//

