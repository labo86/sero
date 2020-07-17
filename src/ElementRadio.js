import {ElementBase} from "./ElementBase";


/**
 * Los radio buttons son reconocidos por el id de uno de sus elementos y asociados con otros por su atributo {@link ElementBase.getName() name}.
 *
 * La estrategia para manejar los radio buttons es obtener todos los radio buttons con un mismo nombre y guardarlos en una {@link ElementRadio.radios}.
 * Con tal arreglo se puede establecer y obtener el valor de los radio buttons en su conjunto.
 *
 * @property radios El arreglo que contiene los radio buttons
 */
export class ElementRadio extends ElementBase {
    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        super(element);
        let radios = document.getElementsByName(this.getName());
        if ( element.form instanceof HTMLFormElement ) {
            this.radios = [];
            for (let radio of radios) {
                if ( radio.form === element.form )
                    this.radios.push(radio);
            }
        } else {
            this.radios = radios;
        }
    }

    getValue() {
        for (let radio of this.radios) {
            if (radio.checked)
                return radio.value;

        }
        return null;
    }

    setValue(value) {
        for (let radio of this.radios)
            radio.checked = (radio.value === value);
    }
}
