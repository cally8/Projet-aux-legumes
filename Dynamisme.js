//Valider un formulaire 

let myform = document.getElementById('myform');
let errorDisplay = document.getElementById('error-message');

myform.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
    
    let firstname = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let message = document.getElementById('message');
    let nameRegex = /^[a-zA-Z-\s]+$/;

    let errorMessages = [];

    if (firstname.value.trim() === "") {
        errorMessages.push("Veuillez remplir le champ prénom.");
    } else if (nameRegex.test(firstname.value) === false) {
        errorMessages.push("Le prénom doit comporter uniquement des lettres et des tirets.");
    }

    if (lastname.value.trim() === "") {
        errorMessages.push("Veuillez remplir le champ nom.");
    } else if (nameRegex.test(lastname.value) === false) {
        errorMessages.push("Le nom doit comporter uniquement des lettres et des tirets.");
    }

    if (message.value.trim() === "") {
        errorMessages.push("Veuillez remplir le champ commentaire.");
    }

    let messageRegex = /\S+/;
    if (!messageRegex.test(message.value)) {
        errorMessages.push("Le commentaire ne peut pas être vide.");
    }

    if (errorMessages.length > 0) {
        errorDisplay.innerHTML = errorMessages.join("<br>"); // Affiche tous les messages d'erreur dans un paragraphe
        errorDisplay.style.display = "block"; // Affiche l'élément contenant les messages d'erreur
    } else {
          // Si aucune erreur, le formulaire peut être soumis
        errorDisplay.innerHTML = ""; // Efface tout contenu précédent dans errorDisplay
        errorDisplay.style.display = "none"; // Cache l'élément contenant les messages d'erreur

        // Récupérer les valeurs du formulaire
        let lePrenom = document.getElementById('firstname').value;
        let leNom = document.getElementById('lastname').value;
        let leMessage = document.getElementById('message').value;

        // Créer les éléments pour le commentaire
        let newDiv = document.createElement('div');
        let newTitle = document.createElement('h3');
        let paragraphe = document.createElement('p');

        // Ajouter les valeurs du formulaire aux éléments créés
        newTitle.innerHTML = lePrenom + " " + leNom;
        paragraphe.innerHTML = leMessage;

        // Associer les éléments créés à la structure du commentaire
        newDiv.appendChild(newTitle);
        newDiv.appendChild(paragraphe);

        // Ajouter le nouveau commentaire à la liste de commentaires
        let commentList = document.getElementById('comment-list');
        commentList.appendChild(newDiv);

        // Réinitialiser le formulaire après l'ajout du commentaire
        document.getElementById('myform').reset();

       /* console.log(lePrenom, leNom, leMessage); // Vérifie les valeurs récupérées du formulaire
        console.log(commentList); // Vérifie si commentList est correctement sélectionné
*/
    
    }

});

