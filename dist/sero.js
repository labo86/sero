(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sero"] = factory();
	else
		root["sero"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "get", function() { return /* reexport */ get; });

// CONCATENATED MODULE: ./src/ElementBase.js

/**
 * Esta es la clase base de todos los elementos sero.
 * Lo que hace es encapsular un HTMLElement y definir una propiedad de objeto con la cual se puede interactuar.
 * Este elemento necesita que el método {@link ElementBase.setValueProperty} para establecer el valor.
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
 * @property {HTMLElement} element El elemento HTML que se maneja.
 * @property value El valor con el que se interactúa.
 */

class ElementBase_ElementBase {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.element = element;
  }
  /**
   * El nombre es el atributo HTML <strong>data-sero-name</strong> o <strong>name</strong> en su defecto.
   * Si no posee nombre es nulo.
   * Generalmente el nombre tiene sentido cuando es parte de algo con estructura de objeto o arreglo asociativo.
   * Por ejemplo json, forms, etc.
   * @returns {string|null}
   */


  getName() {
    if (this.element.hasAttribute('name')) return this.element.getAttribute('name');
    if (this.element.hasAttribute('data-sero-name')) return this.element.getAttribute('data-sero-name');
    return null;
  }
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
    for (var child of this.iterateElements()) {
      if (child.getName() !== null) yield child;else yield* child.iterateObjectElements();
    }
  }
  /**
   * Itera sobre los elementos hijos.
   * Cada elemento es contenido en su elemento sero correspondiente
   * @returns {IterableIterator<ElementBase>}
   */


  *iterateElements() {
    var children = this.element.children;

    for (var child of children) {
      yield get(child);
    }
  }
  /**
   * Obtiene el primer sub element que tenga el {@link ElementBase.getName nombre} dado.
   * @param name
   * @returns {null|ElementBase}
   */


  getElement(name) {
    for (var child of this.iterateObjectElements()) {
      if (child.getName() === name) return child;
    }

    return null;
  }

}
// CONCATENATED MODULE: ./src/ElementPlain.js

/**
 * Este es el elemento que se usa para los elementos HTML normales.
 * Estos son div, p, h, etc.
 * Esto es posible porque lo que se usa como contenedor de la variable es {@link https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML innerHTML}
 */

class ElementPlain_ElementPlain extends ElementBase_ElementBase {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    super(element);
    this.setValueProperty({
      get() {
        /** @this {ElementPlain} */
        return this.element.innerHTML;
      },

      set(value) {
        /** @this {ElementPlain} */
        this.element.innerHTML = value;
      }

    });
  }

}
// CONCATENATED MODULE: ./src/core.js

/**
 * Función que construye un elemento sero.
 * @callback builderCallback
 * @param {HTMLElement} elemento
 * @returns {ElementBase}
 */

/**
 * Esta función normaliza obtener un elemento.
 * Si se entrega un string entonces se interpretará como id y buscará el elemento con dicho id.
 * Si se entrega un HTMLElement entonces solo se verificará que sea un HTMLElement
 * @param {HTMLElement|string} element Un elemento o id
 * @returns {HTMLElement}
 */

function normalizeElement(element) {
  if (typeof element === 'string') element = document.getElementById(element);
  if (element === null) throw "Element is null";
  if (element instanceof HTMLElement) return element;
  throw "Not an HTMLElement";
}
/**
 * Obtiene el tipo sero de elemento.
 * El tipo es como se debe ser tratado el elemento.
 * Para resolver esto se usara el tagName y el data-type.
 * El tipo es un string que servirá construir el elemento que será usado para interactuar con el HTMLElement.
 * Cada tipo deberá corresponder a una función registrada por {@see registerType()}
 * @param {HTMLElement} element Elemento del que se quiere obtener el tipo
 * @returns {string}
 */

function getType(element) {
  element = normalizeElement(element);

  if (element.hasAttribute('data-sero-type')) {
    return element.getAttribute('data-sero-type');
  } else {
    if (element.tagName === 'INPUT') {
      var input_type = element.hasAttribute('type') ? element.getAttribute('type') : null;
      if (input_type === null) return 'plain';else if (input_type === 'text') return 'input_text';else if (input_type === 'file') return 'input_file';else if (input_type === 'number') return 'input_number';else if (input_type === 'checkbox') return 'input_checkbox';else if (input_type === 'radio') return 'input_radio';else return 'input_text';
    } else if (element.tagName === 'TEXTAREA') {
      return 'input_text';
    } else if (element.tagName === 'IMG') {
      return 'image';
    } else if (element.tagName === 'SELECT') {
      return 'input_text';
    } else {
      return 'plain';
    }
  }
}
/**
 * Obtiene un elemento para su uso.
 * Esta es la única función con la que el usuario final podrá interactuar directamente.
 * @param {HTMLElement|string} element or id
 * @returns {ElementBase}
 */

function get(element) {
  element = normalizeElement(element);
  var type_name = getType(element);
  if (type.hasOwnProperty(type_name)) return type[type_name](element);else return new ElementPlain_ElementPlain(element);
}
/**
 * En este objeto se guardan las funciones que construyen elementos sero.
 * Las llaves son tipos que son obtenidos por {@link getType}.
 * @type {Object.<string, builderCallback>}
 */

var type = {};
/**
 * Con esta función se registran nuevas funciones de construcción de elementos sero.
 * @param {string} name
 * @param {builderCallback} builder_callback
 */

function registerType(name, builder_callback) {
  type[name] = builder_callback;
}
// CONCATENATED MODULE: ./src/ElementValued.js

/**
 * Este elemento se usa para los HTMLElement que poseen un atributo value.
 * Por ejemplo input text, select, input hidden.
 * @property {HTMLInputElement} element
 */

class ElementValued_ElementValued extends ElementBase_ElementBase {
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
// CONCATENATED MODULE: ./src/ElementRadio.js

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

class ElementRadio_ElementRadio extends ElementBase_ElementBase {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    super(element);
    this.radios = document.getElementsByName(this.getName());
    this.setValueProperty({
      get() {
        for (var radio of this.radios) {
          if (radio.checked) return radio.value;
        }

        return null;
      },

      set(value) {
        for (var radio of this.radios) {
          radio.checked = radio.value === value;
        }
      }

    });
  }

}
// CONCATENATED MODULE: ./src/ElementCheckable.js

/**
 * Este es un elemento para manejar HTMLElement que sean remarcable por el atributo checked.
 * Por ejemplo un checkbox
 * @property {HTMLInputElement} element
 */

class ElementCheckable_ElementCheckable extends ElementBase_ElementBase {
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
// CONCATENATED MODULE: ./src/ElementAttribute.js

/**
 * Este elemento sirve para interactuar con elementos en atributos.
 * Esto se hace interactuando mediante las funciones {@link https://developer.mozilla.org/es/docs/Web/API/Element/getAttribute getAttribute} y
 * {@link https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute setAttribute}
 * @property {HTMLInputElement} element
 */

class ElementAttribute_ElementAttribute extends ElementBase_ElementBase {
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
    if (typeof attribute_name === 'string') this.attribute_name = attribute_name;else if (element.hasAttribute('data-sero-attribute-name')) this.attribute_name = element.getAttribute('data-sero-attribute-name');else throw "attribute not specified";
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
// CONCATENATED MODULE: ./src/ElementInputNumber.js

/**
 * Es casi lo mismo que {@link ElementValued}. Lo que cambia es que se asegura que el valor sea un número tanto al obtener como para establecer.
 * No se si esta clase sea tan necesaria.
 * @property {HTMLInputElement} element
 */

class ElementInputNumber_ElementInputNumber extends ElementBase_ElementBase {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    super(element);
    this.setValueProperty({
      get() {
        return parseInt(this.element.value);
      },

      set(value) {
        this.element.value = value.toString();
      }

    });
  }

}
// CONCATENATED MODULE: ./src/ElementObject.js

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

class ElementObject_ElementObject extends ElementBase_ElementBase {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    super(element);
    this.setValueProperty({
      get() {
        var result = {};

        for (var child of this.iterateObjectElements()) {
          var name = child.getName();
          if (name !== null) result[name] = child.value;
        }

        return result;
      },

      set(value) {
        for (var child of this.iterateObjectElements()) {
          var name = child.getName();
          if (name !== null && value.hasOwnProperty(name)) child.value = value[name];
        }
      }

    });
  }

}
// CONCATENATED MODULE: ./src/ElementArray.js


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

class ElementArray_ElementArray extends ElementBase_ElementBase {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    super(element);
    this.item_template_id = element.getAttribute('data-sero-item');
    this.item_template = document.getElementById(this.item_template_id).content.firstElementChild;
    this.setValueProperty({
      get() {
        var elements = [];

        for (var child of this.iterateElements()) {
          elements.push(child.value);
        }

        return elements;
      },

      set(values) {
        this.element.innerHTML = '';
        if (!Array.isArray(values)) return;

        for (var value of values) {
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
    var item = this.item_template.cloneNode(true);
    var elem = get(item);
    elem.value = value;
    this.element.appendChild(item);
  }

}
// CONCATENATED MODULE: ./src/ElementInputFile.js

/**
 * Se usa para interactuar con los input file.
 * Esta clase solo puede obtener un valor y no establecer.
 * No tiene mucho sentido establecer dado las medidas de seguridad de los navegadores.
 * @property {HTMLInputElement} element
 */

class ElementInputFile_ElementInputFile extends ElementBase_ElementBase {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    super(element);
    this.setValueProperty({
      get() {
        return this.element.files.length > 0 ? this.e.files[0] : null;
      }

    });
  }

}
// CONCATENATED MODULE: ./src/index.js










registerType('input_text', element => new ElementValued_ElementValued(element));
registerType('input_radio', element => new ElementRadio_ElementRadio(element));
registerType('input_checkbox', element => new ElementCheckable_ElementCheckable(element));
registerType('input_number', element => new ElementInputNumber_ElementInputNumber(element));
registerType('image', element => new ElementAttribute_ElementAttribute(element, 'src'));
registerType('attribute', element => new ElementAttribute_ElementAttribute(element));
registerType('object', element => new ElementObject_ElementObject(element));
registerType('array', element => new ElementArray_ElementArray(element));
registerType('input_file', element => new ElementInputFile_ElementInputFile(element));
registerType('custom', element => new ElementBase_ElementBase(element));


/***/ })
/******/ ]);
});