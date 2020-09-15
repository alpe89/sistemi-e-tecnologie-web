var nomeElement = document.getElementById("nome");
var cognomeElement = document.getElementById("cognome");
var matricolaElement = document.getElementById("matricola");
var dataElement = document.getElementById("data-di-nascita");
var regioneElement = document.getElementById("regione-di-nascita");
var emailElement = document.getElementById("email");
var buttonElement = document.getElementById("submit-button");
// Aggiungo un listener sull'evento click dell'elemento con id "submit-button".
buttonElement.addEventListener("click", function (e) {
  // Evito che il form venga inviato ad una pagina che non esiste.
  e.preventDefault();
});
