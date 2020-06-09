import {ElementPlain} from "./ElementPlain";

/**
 * Función que construye un elemento sero.
 * @callback builderCallback
 * @param {HTMLElement} elemento
 * @returns {ElementBase}
 */

/**
 * Esta función normaliza obtener un elemento.
 * Si se entrega un string entonces se interpretará como id y buscará el elemento con dicho id.
 * Si se entrega un HTMLElement entonces solo se verificará que sea un HTMLElement
 * @param {HTMLElement|string} element Un elemento o id
 * @returns {HTMLElement}
 */
export function normalizeElement(element) {
    if (typeof element === 'string')
        element = document.getElementById(element);

    if (element === null)
        throw "Element is null";

    if (element instanceof HTMLElement)
        return element;

    throw "Not an HTMLElement";
}

/**
 * Obtiene el tipo sero de elemento.
 * El tipo es como se debe ser tratado el elemento.
 * Para resolver esto se usara el tagName y el data-type.
 * El tipo es un string que servirá construir el elemento que será usado para interactuar con el HTMLElement.
 * Cada tipo deberá corresponder a una función registrada por {@see registerType()}
 * @param {HTMLElement} element Elemento del que se quiere obtener el tipo
 * @returns {string}
 */
export function getType(element) {
    element = normalizeElement(element);

    if (element.hasAttribute('data-sero-type')) {
        return element.getAttribute('data-sero-type');

    } else {

        if (element.tagName === 'INPUT') {
            let input_type = element.hasAttribute('type') ? element.getAttribute('type') : null;

            return getTypeFromInputType(input_type);

        } else if (element.tagName === 'TEXTAREA') {
            return 'input_text';

        } else if (element.tagName === 'IMG') {
            return 'image';

        } else if ( element.tagName === 'SELECT' ) {
            return 'input_text';

        } else if ( element.tagName === 'FORM' ) {
            return 'object';

        } else {
            return 'plain';
        }
    }
}

/**
 * Obtiene el tipo sero desde el input type del elemento
 * @param {string|null} input_type
 * @returns {string}
 */
function getTypeFromInputType(input_type) {
    if (input_type === null) return 'plain';
    else if (input_type === 'text') return 'input_text';
    else if (input_type === 'file') return 'input_file';
    else if (input_type === 'number') return 'input_number';
    else if (input_type === 'checkbox') return 'input_checkbox';
    else if (input_type === 'radio' ) return 'input_radio';
    else return 'input_text';
}

/**
 * Obtiene un elemento para su uso.
 * Esta es la única función con la que el usuario final podrá interactuar directamente.
 * @param {HTMLElement|string} element or id
 * @returns {ElementBase}
 */
export function get(element) {

    element = normalizeElement(element);

    let type_name = getType(element);

    if (type.hasOwnProperty(type_name))
        return type[type_name](element);
    else
        return new ElementPlain(element);
}

/**
 * En este objeto se guardan las funciones que construyen elementos sero.
 * Las llaves son tipos que son obtenidos por {@link getType}.
 * @type {Object.<string, builderCallback>}
 */
let type = {}

/**
 * Con esta función se registran nuevas funciones de construcción de elementos sero.
 * @param {string} name
 * @param {builderCallback} builder_callback
 */
export function registerType(name, builder_callback) {
	type[name] = builder_callback;
}


