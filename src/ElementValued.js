import {ElementBase} from "./ElementBase";

/**
 * Este elemento se usa para los HTMLElement que poseen un atributo value.
 * Por ejemplo input text, select, input hidden.
 * @property {HTMLInputElement} element
 */
export class ElementValued extends ElementBase {

    getValue() {
        return this.element.value;
    }

    setValue(value) {
        this.element.value = value;
    }
}