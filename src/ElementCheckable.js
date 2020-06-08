import {ElementBase} from "./ElementBase";

/**
 * Este es un elemento para manejar HTMLElement que sean remarcable por el atributo checked.
 * Por ejemplo un checkbox
 * @property {HTMLInputElement} element
 */
export class ElementCheckable extends ElementBase {
    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        super(element);

        this.setValueProperty({
            get() {
                return this.element.checked;
            },
            set(value) {
                this.element.checked = value;
            }
        });
    }
}
