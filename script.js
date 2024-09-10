// Récupération des différents éléments
const extractor = document.querySelector("#extractor");
const form = document.querySelector(".form");
const container = document.querySelector(".container");
const result = document.querySelector(".output__container");
const total = document.querySelector(".total");
const listEmail = document.querySelector(".output");

// Ecoute de l'événement "submit" soumission du formulaire
form.addEventListener("submit", (e) => {
  // Suppression du comportement par défaut
  e.preventDefault();
  let email = extractor.value;
  // Déclaration de la fonction extractEmails ayant comme paramètre value
  const extractEmails = (value) => {
    return value.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
  };
  const word = extractEmails(email); // Appel de la fonction extractEmails ayant comme paramètre email
  let emails = [...new Set(word)]; // Un objet Set permet de stocker un ensemble de valeurs uniques de n'importe quel type, qu'il s'agisse de valeurs primitives ou d'objets.
  result.style.display = "block";

  total.textContent = "Adresse(s) mail extraite(s) ";
  emails.map((email) => {
    listEmail.innerHTML += `<li>${email}</li>`;
  });
  form.reset();
});
