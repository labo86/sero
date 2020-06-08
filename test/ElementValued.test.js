import * as sero from '../src/index.js';
import {expect} from "@jest/globals";

test("handle input text", () => {
    document.body.innerHTML = "<input id='test' type='text' value='none'>";

    let element = sero.get('test');
    expect(element.value).toEqual( 'none');

    element.value = 'edwin';
    expect(element.value).toEqual('edwin');

    expect(element.element.value).toEqual('edwin');
});

test("handle select element", () => {
    document.body.innerHTML = `
<select id="color" name="cars">
    <option value="red">rojo</option>
    <option value="green">verde</option>
    <option value="blues">azul</option>
</select>`;

    let element = sero.get('color');
    expect(element.value).toEqual('red');

    element.value = 'green';
    expect(element.value).toEqual( 'green');
});

test("handle input hidden element", () => {
    document.body.innerHTML = "<input type='hidden' id='test' value='something'/>";

    let element = sero.get('test');


    expect(element.value).toEqual('something');

    element.value = 'other';

    expect(element.value).toEqual('other');

});