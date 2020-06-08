import {ElementBase} from "./ElementBase";
import {get} from "./core";

/**
 * Este elemento sirve para manejar arreglos o listas.
 * La diferencia es que este elemento tiene un método para agregar un elemento hijo.
 * Para agregar un elemento se debe dar un template. este puede ser cualquier tipo de elemento HTML.
 * Su primer hijo se clonara y se usara para crear nuevos elementos por {@link ElementArray.add}.
 *
 * Un ejemplo valido de array es el siguiente:
 * ```
 * <div id="list" data-sero-type="array" data-sero-item="item-template">
 * </div>
 * <template id="item-template">
 *     <p></p>
 * </template>
 * <script>
 * let list = sero.get('list');
 * list.add('hello');
 * list.add('world');
 * </script>
 * ```
 * En el ejemplo anterior habrán dos p en el div inicial.
 * @property {string} item_template_id Id del elemento que es el template para los hijos
 * @property {HTMLElement} item_template ElementoHTML que sirve para template de hijos.
 */
export class ElementArray extends ElementBase {

    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        super(element);

        this.item_template_id = element.getAttribute('data-sero-item');
        this.item_template = document.getElementById(this.item_template_id).content.firstElementChild;

        this.setValueProperty({
            get() {
                let elements = [];
                for (let child of this.iterateElements() ) {
                    elements.push(child.value);
                }
                return elements;
            },
            set(values) {
                this.element.innerHTML = '';

                if (!Array.isArray(values)) return;
                for (let value of values) {
                    this.add(value);
                }
            }
        });
    }

    /**
     * Agrega un elemento hijo.
     * Cada elemento hará uso del mismo {@link ElementArray.item_template template}.
     * @param value
     */
    add(value) {
        let item = this.item_template.cloneNode(true);
        let elem = get(item);
        elem.value = value;
        this.element.appendChild(item);
    }
}
