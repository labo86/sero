import {ElementBase} from "./ElementBase";

/**
 * Este elemento sirve para interactuar con elementos en atributos.
 * Esto se hace interactuando mediante las funciones {@link https://developer.mozilla.org/es/docs/Web/API/Element/getAttribute getAttribute} y
 * {@link https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute setAttribute}
 * @property {HTMLInputElement} element
 */
export class ElementAttribute extends ElementBase {
    /**
     * Este constructor acepta un segundo argumento que es el nombre del atributo.
     * Si es dado usara el valor de dicho atributo para establecer y obtener.
     * Si no es dado intentará obtenerlo del atributo <strong>data-sero-attribute-name</strong>
     *
     * Ejemplo:
     * ```
     * <div data-sero-attribute-name="custom-attribute" custom-attribute="my_value"></div>
     * ```
     * @param {HTMLElement} element
     * @param {string|null} [attribute_name]
     */
    constructor(element, attribute_name) {
        super(element);

        if ( typeof attribute_name === 'string')
            this.attribute_name = attribute_name;
        else if ( element.hasAttribute('data-sero-attribute-name'))
            this.attribute_name = element.getAttribute('data-sero-attribute-name')
        else
            throw "attribute not specified";

        this.setValueProperty({
            get() {
                return this.element.getAttribute(this.attribute_name);
            },
            set(value) {
                this.element.setAttribute(this.attribute_name, value);
            }
        });
    }
}
