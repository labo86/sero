import {ElementBase} from "./ElementBase";

/**
 * Este elemento se usa para los HTMLElement que poseen un atributo value.
 * Por ejemplo input text, select, input hidden.
 * @property {HTMLInputElement} element
 */
export class ElementValued extends ElementBase {
    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        super(element);

        this.setValueProperty({
            get() {
                return this.element.value;
            },
            set(value) {
                this.element.value = value;
            }
        });
    }
}