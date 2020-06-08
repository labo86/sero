import {get} from "./core";

/**
 * Esta es la clase base de todos los elementos sero.
 * Lo que hace es encapsular un HTMLElement y definir una propiedad de objeto con la cual se puede interactuar.
 * El método de uso de este elemento es el siguiente:
 *
 * ```
 * element.setValueProperty({
 *   get() { return 'hello';},
 *   set(value){
 *     this.element.value = value;
 *   }
 * });
 * element.value = 'something';
 * console.log(element.value);
 * ```
 * También se puede heredar y sobre-escribir los métodos ElementBase.getValue() y ElementBase.setValue() para
 * cambiar el comportamiento de la propiedad valor
 * @property {HTMLElement} element El elemento HTML que se maneja.
 * @property value El valor con el que se interactúa.
 */
export class ElementBase {
    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        this.element = element;

        this.setValueProperty({
            get : this.getValue,
            set : this.setValue,
            configurable: true
        });
    }

    /**
     * El nombre es el atributo HTML <strong>data-sero-name</strong> o <strong>name</strong> en su defecto.
     * Si no posee nombre es nulo.
     * Generalmente el nombre tiene sentido cuando es parte de algo con estructura de objeto o arreglo asociativo.
     * Por ejemplo json, forms, etc.
     * @returns {string|null}
     */
    getName() {
        if (this.element.hasAttribute('name'))
            return this.element.getAttribute('name');

        if ( this.element.hasAttribute('data-sero-name'))
            return this.element.getAttribute('data-sero-name');

        return null;
    }

    getValue() { return null; }

    setValue(value) {;}

    /**
     * Este método establece una propiedad de objeto value.
     * La mayoría de los otros objetos establecen esta propiedad por defecto.
     * @param descriptor {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/defineProperty}
     */
    setValueProperty(descriptor) {
        Object.defineProperty(this, 'value', descriptor);
    }

    /**
     * Itera sobre los elementos de objeto
     *
     * Si el elemento HTML actual es un objeto entonces esta función busca los elementos descendientes (directos o indirectos)
     * que poseen un {@link ElementBase.getName nombre} no nulo.
     * @returns {IterableIterator<ElementBase>}
     */
    *iterateObjectElements() {
        for (let child of this.iterateElements()) {
            if (child.getName() !== null)
                yield child;
            else
                yield* child.iterateObjectElements();
        }
    }

    /**
     * Itera sobre los elementos hijos.
     * Cada elemento es contenido en su elemento sero correspondiente
     * @returns {IterableIterator<ElementBase>}
     */
    *iterateElements() {
        let children = this.element.children;

        for (let child of children) {
            yield get(child);
        }
    }

    /**
     * Obtiene el primer sub element que tenga el {@link ElementBase.getName nombre} dado.
     * @param name
     * @returns {null|ElementBase}
     */
    getElement(name) {
        for (let child of this.iterateObjectElements() ) {
            if (child.getName() === name)
                return child;
        }
        return null;
    }
}
