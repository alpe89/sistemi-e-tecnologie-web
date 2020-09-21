var nomeElement = document.getElementById("nome");
var cognomeElement = document.getElementById("cognome");
var matricolaElement = document.getElementById("matricola");
var dataElement = document.getElementById("data-di-nascita");
var regioneElement = document.getElementById("regione-di-nascita");
var emailElement = document.getElementById("email");
var buttonElement = document.getElementById("submit-button");
// Array per comodità di validazione
var formElements = [
  nomeElement,
  cognomeElement,
  matricolaElement,
  dataElement,
  regioneElement,
  emailElement,
];
// Aggiungo un listener sull'evento click dell'elemento con id "submit-button".
buttonElement.addEventListener("click", function (e) {
  // Evito che il form venga inviato ad una pagina inesistente.
  e.preventDefault();
  // Valida tutti gli elementi in formElements
  for (var i = 0; i < formElements.length; i++) {
    validateFormElement(formElements[i]);
  }
});
/**
 * Questa funzione aggiunge una classe per la visualizzazione dell'errore
 * nell'input in caso il valore sia vuoto. La rimuove altrimenti.
 *
 * @param {HTMLelement} element L'elemento DOM da validare
 */
function validateFormElement(element) {
  if (
    element.value.length === 0 &&
    !element.classList.contains("input-error")
  ) {
    element.classList.add("input-error");
  }

  if (element.value.length > 0 && element.classList.contains("input-error")) {
    element.classList.remove("input-error");
  }
}
