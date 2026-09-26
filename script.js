
// =================================
// JAVASCRIPT DU PORTFOLIO
// =================================

// On récupère tous les liens internes de la page.
const links = document.querySelectorAll('a[href^="#"]');

// Navigation fluide vers les sections.
links.forEach(function (link) {

  link.addEventListener("click", function (event) {

    const targetId = link.getAttribute("href");

    const target = document.querySelector(targetId);

    // Vérifie que la section existe.
    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


// Message dans la console lorsque le recruteur
// clique sur le bouton de contact.
const contactButton = document.querySelector(
  'a[href^="mailto:"]'
);

if (contactButton) {

  contactButton.addEventListener("click", function () {

    console.log(
      "Le visiteur souhaite contacter Camille Martin."
    );

  });

}