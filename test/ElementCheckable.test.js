import * as sero from '../src/index.js';
import {expect} from "@jest/globals";

test("handle checkbox", () => {
    document.body.innerHTML = "<input type='checkbox' id='best' checked/>";


    let element = sero.get('best');
    expect(element.value).toEqual(true);

    element.value = false;
    expect(element.value).toEqual(false);

});

