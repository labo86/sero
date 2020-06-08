import {ElementBase} from "./ElementBase";

/**
 * Este es el elemento que se usa para los elementos HTML normales.
 * Estos son div, p, h, etc.
 * Esto es posible porque lo que se usa como contenedor de la variable es {@link https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML innerHTML}
 */
export class ElementPlain extends ElementBase {

    getValue() {
        return this.element.innerHTML;
    }

    setValue(value) {
        this.element.innerHTML = value;
    }

}
