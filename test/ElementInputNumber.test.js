import * as sero from '../src/index.js';
import {expect} from "@jest/globals";

test("handle input number", () => {
    document.body.innerHTML = "<input id='test' type='number' value=100>";


    let element = sero.get('test');
    expect(element.value).toEqual(100);

    element.value = 212;
    expect(element.value).toEqual(212);

    expect(element.element.value).toEqual("212");
});

