import * as sero from '../src/index.js';
import {expect} from "@jest/globals";

test("handle attribute element", () => {
    document.body.innerHTML = "<div id='test' data-sero-type='attribute' data-sero-attribute-name='data-custom' data-custom='some value'/>";

    let element = sero.get('test');


    expect(element.value).toEqual('some value');
    expect(element.element.getAttribute('data-custom')).toEqual('some value');

    element.value = 'changed';

    expect(element.value).toEqual('changed');

    expect(element.element.getAttribute('data-custom')).toEqual('changed');

    element.element.setAttribute('data-custom', 'changed again');
    expect(element.value).toEqual('changed again');
});

test("handle attribute element non existent", () => {
    document.body.innerHTML = "<div id='test' data-sero-type='attribute'/>";

   expect(()=> { sero.get('test'); }).toThrowError("attribute not specified");

});

test("handle image element", () => {
    document.body.innerHTML = "<img id='test' src='data:some_data'/>";

    let element = sero.get('test');


    expect(element.value).toEqual('data:some_data');

    element.value = 'http://www.google.com';

    expect(element.value).toEqual('http://www.google.com');

});
