import {ElementBase} from "./ElementBase";

/**
 * Este es el elemento que se ocupa cuando se quiere usar una estructura de objeto en un element HTML.
 * el objeto padre tiene que llevar estar con un {@link getType tipo sero} object y cada uno de los atributos hijos deben tener un atributo {@link ElementBase.name}
 * No es necesario que los hijos sean hijos directos.
 *
 * Ejemplo:
 * ```
 * <div id="persona" data-sero-type="object">
 *     <div data-sero-name="nombre">Edwin</div>
 *     <div data-sero-name="apellido">Rodríguez</div>
 * </div>
 * ```
 *
 * Estructura en objeto
 * ```
 * { "nombre" : "Edwin", "apellido" : "Rodríguez" }
 * ```
 *
 * Para los getter y setters se hace uso del método {@link ElementBase.iterateObjectElements}
 */
export class ElementObject extends ElementBase {

    getValue() {
        let result = {};
        for (let child of this.iterateObjectElements()) {
            let name = child.getName();
            if (name !== null)
                result[name] = child.value;
        }
        return result;
    }

    setValue(value) {
        for (let child of this.iterateObjectElements()) {
            let name = child.getName();
            if (name !== null && value.hasOwnProperty(name))
                child.value = value[name];
        }
    }
}
