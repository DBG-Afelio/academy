document.forms[0].addEventListener('submit', (e) => {
    let valid = false;
    const form = document.forms[0];
    valid = isNomCorrect(form);
    if (!valid) {
        e.preventDefault(); //annule la soumission du formulaire
    }

    return valid;
})

/**
 * Reset errors for a field
 * @param {string} fieldName 
 */
function fieldInit(fieldName) {

}
/**
 * Set field in error state and write error message
 * @param {string} fieldName 
 * @param {string} errorMessage 
 */
function setFieldError(fieldName, errorMessage) {

}
/**
 * Reset all fields form
 * @param {HTMLFormElement} formulaire 
 */
function allFieldsInit(formulaire) {

}
/**
 * Handle Name Fields Validation
 * @param {HTMLFormElement} formulaire 
 * @returns {boolean} valide state of the field
 */
function isNomCorrect(formulaire) {

}

/**
 * Return true if the string have one or more non space character
 * @param {string} chaine 
 * @returns boolean
 */
function isRequired(chaine){
}

/**
 * Return true if the string contains only alpha numeric characters
 * @param {string} name 
 */
function isNameValid(name) {
}

