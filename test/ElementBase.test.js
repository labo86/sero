import * as sero from '../src/index.js';
import {expect} from "@jest/globals";


test("handle plain element", () => {
    document.body.innerHTML = "<div id='test' data-sero-type='custom'>none</div>";

    let outVar = 'first';

    let element = sero.get('test');

    expect(element.value).toEqual(null);

    element.value = null;
    expect(element.value).toEqual(null);

    element.setValueProperty({
       get() { return outVar; },
       set(value) { outVar = value; }
    });
    expect( element.value).toEqual('first');

    element.value = 'edwin';
    expect(element.value).toEqual( 'edwin');
    expect(outVar).toEqual( 'edwin');

    outVar = 'second';
    expect(element.value).toEqual( 'second');
});
