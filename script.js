document.addEventListener("DOMContentLoaded", function() {
            let typed = new Typed('.auto-typing', {
               strings: [
"BIENVENUE À HOTEL MARACUJA",
"CONFORT • LUXE • SÉCURITÉ",
"RÉSERVEZ EN LIGNE DÈS MAINTENANT",
"VOTRE SATISFACTION EST NOTRE PRIORITÉ"
],
               typeSpeed: 100,
               backSpeed: 100,
               loop: true,
            //    fedOut: true,
            //    fedOutclass: 'typed-fade-out',
            //    fedOutDelay: 500
            });
        });

                // Button





document.addEventListener("DOMContentLoaded", function () {

    const cham = document.querySelector('.cham');
    const images = document.querySelectorAll('.cham img');
    const next = document.querySelector('.Next');
    const prev = document.querySelector('.Prev');

    let index = 0;
    let autoSlide;

    // fonction pour déplacer les images
    function updateSlide() {
        cham.style.transform = `translateX(-${index * 100}%)`;
    }

    // bouton NEXT
    next.addEventListener("click", () => {
        index++;
        if (index >= images.length) index = 0;
        updateSlide();
        resetAuto(); // reset autoplay
    });

    // bouton PREV
    prev.addEventListener("click", () => {
        index--;
        if (index < 0) index = images.length - 1;
        updateSlide();
        resetAuto(); // reset autoplay
    });

    // AUTOPLAY
    function startAuto() {
        autoSlide = setInterval(() => {
            index++;
            if (index >= images.length) index = 0;
            updateSlide();
        }, 4000);
    }

    // RESET AUTOPLAY quand on clique
    function resetAuto() {
        clearInterval(autoSlide);
        startAuto();
    }

    // démarrer autoplay au chargement
    startAuto();

});




// formulaire
document.querySelector(".formul").addEventListener("submit", function(e) {

    let message = document.getElementById("messageErreur");

    let nom = document.getElementById("nom").value.trim();
    let email = document.querySelector('input[type="email"]').value.trim();
    let tel = document.querySelector('input[type="tel"]').value.trim();
    let personnes = document.querySelector('input[type="number"]').value.trim();
    let date = document.querySelector('input[type="date"]').value;

    // Réinitialiser le message
    message.textContent = "";
    message.style.display = "none";

    //  Fonction erreur
    function afficherErreur(texte) {
        message.textContent = texte;
        message.style.display = "block";
        message.style.color = "red";
        message.style.textAlign= "center";
        message.style.padding = "10px";
        message.style.marginTop = "10px";

    }

    //  Fonction succès
    function afficherSucces(texte) {
        message.textContent = texte;
        message.style.display = "block";
        message.style.color = "green";
        message.style.textAlign = "center";
        message.style.padding = "10px";
        message.style.marginTop = "10px";
    }

    // Vérifications
    if(nom === "" || email === "" || tel === "" || personnes === "" || date === "") {
        afficherErreur("Veuillez remplir tous les champs.");
        e.preventDefault();
        return;
    }

    if(!email.includes("@")) {
        afficherErreur("Email invalide.");
        e.preventDefault();
        return;
    }

    if(tel.length < 8) {
        afficherErreur("Numéro invalide.");
        e.preventDefault();
        return;
    }

    if(personnes <= 0) {
        afficherErreur("Nombre de personnes invalide.");
        e.preventDefault();
        return;
    }

    // ✅ Succès
    afficherSucces("Réservation envoyée avec succès !");

});