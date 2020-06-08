import {ElementBase} from "./ElementBase";


/**
 * Los radio buttons son reconocidos por el id de uno de sus elementos y asociados con otros por su atributo {@link ElementBase.getName() name}.
 * Por el momento no pueden haber más de un radio button con el mismo nombre por documento.
 * Se pretende en el futuro reducir esto al contexto de un form.
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

        this.radios = document.getElementsByName(this.getName());

        this.setValueProperty({
            get() {
                for (let radio of this.radios) {
                    if (radio.checked)
                        return radio.value;

                }
                return null;
            },
            set(value) {
                for (let radio of this.radios)
                    radio.checked = (radio.value === value);
            }
        });
    }
}
