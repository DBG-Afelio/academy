const existingLogin = ['theo', 'marcel', 'robert'];
const specialsCharRegExp = '&§!$*%£+:;';
const digitRegExp = '0-9';
const regularAlphaRegExp = 'a-zéèàêôûîëöüï';

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
    if (document.querySelector(`#${fieldName}_message`)){
        document.querySelector(`#${fieldName}_message`).textContent = '';
        document.querySelector(`#${fieldName}`).classList.remove('error');
    }
}
/**
 * Set field in error state and write error message
 * @param {string} fieldName 
 * @param {string} errorMessage 
 */
function setFieldError(fieldName, errorMessage) {
    if (document.querySelector(`#${fieldName}_message`)){
        document.querySelector(`#${fieldName}_message`).textContent = errorMessage;
        document.querySelector(`#${fieldName}`).classList.add('error');
    }
}
/**
 * Reset all fields form
 * @param {HTMLFormElement} formulaire 
 */
function allFieldsInit(formulaire) {
    for(let i = 0; i < formulaire.length; i++) {
        fieldInit(formulaire[i].name);
    }
}
/**
 * Handle Name Fields Validation
 * @param {HTMLFormElement} formulaire 
 * @returns {boolean} valide state of the field
 */
function isNomCorrect(formulaire) {
    const field = formulaire.nom;
    let valid = true;
    fieldInit('nom');
    if (! isRequired(field.value)) {
        valid = false;
        setFieldError('nom', 'le nom doit être complété');
    } else if(!isNameValid(field.value)) {
        valid = false;
        setFieldError('nom', 'le nom ne doit contenir que des caracères valides');
    }
    
    return valid;
}

function isRequired(chaine){
    return chaine.trim().length > 0;
}

function isNameValid(name) {
    const reg = /^[a-zéèàêôûîëöüï]*$/;
    return reg.test(name); 
}

