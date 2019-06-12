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
    document.querySelector('#' + fieldName + '_message').textContent = '';
    document.querySelector('#' + fieldName).classList.remove('error');

}
/**
 * Set field in error state and write error message
 * @param {string} fieldName 
 * @param {string} errorMessage 
 */
function setFieldError(fieldName, errorMessage) {
    document.querySelector('#' + fieldName + '_message').textContent = errorMessage;
    document.querySelector('#' + fieldName).classList.add('error');
}
/**
 * Reset all fields form
 * @param {HTMLFormElement} formulaire 
 */
function allFieldsInit(formulaire) {
    for (let index = 0; index < formulaire.length-1; index++) {
        const element = formulaire[index];
        fieldInit(element.name);
    }
}
/**
 * Handle Name Fields Validation
 * @param {HTMLFormElement} formulaire 
 * @returns {boolean} valide state of the field
 */
function isNomCorrect(formulaire) {
    let valid = true;
    fieldInit('nom');

    if (!isRequired(formulaire.nom.value)){
        valid = false;
        setFieldError('nom', 'Le champ nom doit être rempli');
    } else if (!isNameValid(formulaire.nom.value)) {
        valid = false;
        setFieldError('nom', 'Le champ nom contient des caractères interdits');
    }

    return valid;
}

/**
 * Return true if the string have one or more non space character
 * @param {string} chaine 
 * @returns boolean
 */
function isRequired(chaine){
    return chaine.trim() !== '';
}

/**
 * Return true if the string contains only alpha numeric characters
 * @param {string} name 
 */
function isNameValid(name) {
    const reg = /^[a-zâäàéèêëîïôöûü]{0,}$/i;
    return reg.test(name);
}

