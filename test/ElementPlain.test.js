import * as sero from '../src/index.js';
import {expect} from "@jest/globals";


test("handle plain element", () => {
    document.body.innerHTML = "<div id='test'>none</div>";

    let element = sero.get('test');
    expect( element.value).toEqual('none');

    element.value = 'edwin';
    expect(element.value).toEqual( 'edwin');

    expect(element.element.innerHTML).toEqual( 'edwin');
});
