import {registerType} from "./core";
import {ElementValued} from "./ElementValued";
import {ElementRadio} from "./ElementRadio";
import {ElementCheckable} from "./ElementCheckable";
import {ElementAttribute} from "./ElementAttribute";
import {ElementInputNumber} from "./ElementInputNumber";
import {ElementObject} from "./ElementObject";
import {ElementArray} from "./ElementArray";
import {ElementInputFile} from "./ElementInputFile";
import {ElementBase} from "./ElementBase";

registerType('input_text', (element) => new ElementValued(element) );
registerType('input_radio', (element) => new ElementRadio(element) );
registerType('input_checkbox', (element) => new ElementCheckable(element) );
registerType('input_number', (element) => new ElementInputNumber(element) );
registerType('image', (element) => new ElementAttribute(element, 'src') );
registerType('attribute', (element) => new ElementAttribute(element) );
registerType('object', (element) => new ElementObject(element) );
registerType('array', (element) => new ElementArray(element) );
registerType('input_file', (element) => new ElementInputFile(element) );
registerType('custom', (element) => new ElementBase(element) );

export {get} from "./core";