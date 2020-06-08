import {ElementBase} from "./ElementBase";


/**
 * Se usa para interactuar con los input file.
 * Esta clase solo puede obtener un valor y no establecer.
 * No tiene mucho sentido establecer dado las medidas de seguridad de los navegadores.
 * @property {HTMLInputElement} element
 */
export class ElementInputFile extends ElementBase {

    getValue() {
        return this.element.files.length > 0 ? this.element.files[0] : null;
    }

}