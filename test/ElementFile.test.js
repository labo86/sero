import * as sero from '../src/index.js';
import {expect} from "@jest/globals";

test("handle file input", () => {
    document.body.innerHTML = "<input type='file' id='test'/>";


    let element = sero.get('test');
    expect(element.value).toEqual(null);

    // no se puede establecer un input file mediante programación. Pero de todas formas lo intento.
    element.element.value = '';

    expect(element.value).toEqual(null);

});

