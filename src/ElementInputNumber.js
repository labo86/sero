import {ElementBase} from "./ElementBase";


/**
 * Es casi lo mismo que {@link ElementValued}. Lo que cambia es que se asegura que el valor sea un número tanto al obtener como para establecer.
 * No se si esta clase sea tan necesaria.
 * @property {HTMLInputElement} element
 */
export class ElementInputNumber extends ElementBase {

    getValue() {
        return parseInt(this.element.value);
    }

    setValue(value) {
        this.element.value = value.toString();
    }
}