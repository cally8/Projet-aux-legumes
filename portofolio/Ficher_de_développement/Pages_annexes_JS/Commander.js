
//Commander
// Le saviez-vous 
var culture = [];

function afficherDetails(produitId) {
    var laCultureElement = document.getElementById('laCulture' + produitId.slice(-1));
    laCultureElement.style.display = 'block';
};

function fermerLeContenu(produitId) {
    var laCultureElement = document.getElementById('laCulture' + produitId.slice(-1));
    laCultureElement.style.display = 'none';
};

//Ajouter au PANIER

//Panier
 let panierIcon = document.querySelector("#panier");
 let Panier = document.querySelector(".Panier");
 let fermerPanier = document.querySelector("#fermer-panier");
//Ouvrir panier 
//essai 3
// fermerPanier.onferme = (event) =>{
//     var buttonClicked = event.target;
//     Panier.classList.add("active");
    
// };

panierIcon.onclick = ()=>{
    Panier.classList.add("active");
};

fermerPanier.onclick = ()=> {
    Panier.classList.remove("active");
};




//Supprimer une article du panier
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
};
// fonctionnement suppression
function ready(){
    var btnSuppPanier = document.getElementsByClassName("supp-article");
    // Ajouter un evenement pour chaque icon poubelle pour appeler la fonction btnSuppPanier 
    console.log(btnSuppPanier);
    for(var i = 0; i < btnSuppPanier.length; i++) {
        var poubelle = btnSuppPanier[i];
        poubelle.addEventListener('click', removeCartItem);
    }
    //Change la quantité
    var quantiteInput = document.getElementsByClassName('quantite-panier');
    for (var i = 0; i < quantiteInput.length; i++) {
        var input = quantiteInput[i];
        input.addEventListener('change', quantiteChanger);
    }
};

// Item suppression du panier
function removeCartItem (event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
};
//Change quantite
function quantiteChanger (event) {
    var input = event.target;
        if (isNaN(input.value) || input.valut <= 0) {
        input.value = 1;
    }
    updatetotal();
}

function updatetotal() {
    var contenuPanier = document.getElementsByClassName("contenu-panier") [0];
    var panierBoxes = contenuPanier.getElementsByClassName("box-panier");
    var total = 0; 

    for(var i = 0; i < panierBoxes.length; i++) {
        var boxPanier = panierBoxes[i];
        var prixElement = boxPanier.getElementsByClassName("prix-panier") [0];
        var quantiteElement = boxPanier.getElementsByClassName("quantite-panier") [0];
    
        //Récupération du prix et de la quantité
        var prix = parseFloat(prixElement.innerText.replace(" $", ""));
        var quantite = parseInt(quantiteElement.value);

        total = total + (prix*quantite);// total += prix * quantite;

        // Mettre à jour le prix total à l'extérieur de la boucle
        document.getElementsByClassName("prix-total")[0].innerText = total.toFixed(2) + " $" ;

    }

};


