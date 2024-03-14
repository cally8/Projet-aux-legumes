
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
// let panier = [];
// let total = 0;

// function ajouterAuPanier(produitId, prix, quantite, titre, image) {
//     const produit = document.getElementById(produitId);
//     const nomProduit = produit.querySelector('h2').innerText;
//     const prixTotalProduit = prix * quantite;

//     panier.push({ nomProduit, prixTotalProduit, quantite, titre, image });
//     total += prixTotalProduit;

//     afficherPanier();

//     console.log("Panier:", panier)
// }

// function afficherPanier() {
//     const panierListe = document.getElementById('liste-panier');
//     const totalElement = document.getElementById('prix-total');

//     // Effacer le contenu précédent
//     panierListe.innerHTML = '';

//     // Ajouter les articles au panier
//     panier.forEach(item => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <img src="${item.image}" alt="${item.nomProduit}">
//             <span>${item.nomProduit} - ${item.prixTotalProduit.toFixed(2)} - Quantité: ${item.quantite}</span>
//         `;
//         li.textContent = `${item.article} - $${item.prix.toFixed(2)}`;
//         panierListe.appendChild(li);
//     });

//     // Mettre à jour le total
//     totalElement.textContent = total.toFixed(2);
// }





//Panier dynamique
 let cartIcon = document.querySelector("#cart-icon");
 let cart = document.querySelector(".cart");
 let closeCart = document.querySelector("#fermer-panier");

 //Ouvrir panier
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//Fermer panier
closeCart.onclick = () => {
    cart.classList.remove("active");
};


//Chargement du ficher
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
};

// fonctionnement suppression
function ready(){
    var btnSuppPanier = document.getElementsByClassName('supp-article');
    // Ajouter un evenement pour chaque icon poubelle pour appeler la fonction btnSuppPanier 
    console.log(btnSuppPanier);
    for(var i = 0; i < btnSuppPanier.length; i++) {
        var poubelleBtn = btnSuppPanier[i];
        poubelleBtn.addEventListener('click', removeCartItem);
    }
    //Changer la quantité
    var quantityInput = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInput.length; i++) {
        var inputs = quantityInput[i];
        inputs.addEventListener('change', quantityChanged);
    }
};

// Item suppression du panier
function removeCartItem (event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    updatetotal();
};
//Change quantite
function quantityChanged (event) {
    var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content") [0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0; 

    for(var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price") [0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity") [0];
        var price = parseFloat(priceElement.innerText.replace(" $", ""));
        var quantity = quantityElement.value;
        // var quantity = parseInt(quantityElement.value);

        total = total + (price * quantity);

        document.getElementsByClassName('prix-total')[0].innerText = "$" + total;
    
        //Récupération du prix et de la quantité
        // var prix = parseFloat(priceElement.innerText.replace(" $", ""));
        // var quantite = parseInt(quantityElement.value);

        // console.log ("Prix:", prix, "Quantité:", quantite);

        // // Vérification de la quantité avant de calculer
        // if (!isNaN(prix) && !isNaN(quantite) && quantite > 0) {
        //     total += prix * quantite;
        // }
    }

    // console.log("Total avant mise à jour:", total);

    // Mettre à jour le prix total à l'extérieur de la boucle
    // document.getElementsByClassName("prix-total")[0].innerText = total.toFixed(2) + " $" ; a activer
    // var prixTotalElement = document.getElementsByClassName("prix-total")[0];
    // prixTotalElement.innerText = "$" + total.toFixed(2);
    
    // console.log("Total après mise à jour:",total);

};


