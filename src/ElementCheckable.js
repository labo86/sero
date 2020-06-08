import {ElementBase} from "./ElementBase";

/**
 * Este es un elemento para manejar HTMLElement que sean remarcable por el atributo checked.
 * Por ejemplo un checkbox
 * @property {HTMLInputElement} element
 */
export class ElementCheckable extends ElementBase {

    getValue() {
        return this.element.checked;
    }

    setValue(value) {
        this.element.checked = value;
    }
}
