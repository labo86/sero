import * as sero from '../src/index.js';
import {expect} from "@jest/globals";

test("handle radio button element", () => {
    document.body.innerHTML = `
    <input type="radio" id="side" name="side" value="small">
    <input type="radio" name="side" value="big">`;

    let element = sero.get('side');
    expect(element.value).toEqual(null);

    element.value = 'big';
    expect(element.value).toEqual( 'big');

    element.value = 'small';
    expect(element.value).toEqual( 'small');

    element.value = 'other';
    expect(element.value).toEqual( null);

    element.value = 'small';
    expect(element.value).toEqual('small');

    element.value = null;
    expect(element.value).toEqual(null);
});

test("set radio button element", () => {
    document.body.innerHTML = `
    <input type="radio" id="side" name="side" value="small">
    <input type="radio" id="other" name="side" value="big">`;

    let element = sero.get('side');
    expect(element.value).toEqual(null);

    document.getElementById('other').checked = true;
    expect(element.value).toEqual('big');

    document.getElementById('other').checked = false;
    expect(element.value).toEqual( null);

    document.getElementById('side').checked = true;
    expect(element.value).toEqual('small');

    document.getElementById('other').checked = true;
    expect(element.value).toEqual('big');
});

test("radio button checked", () => {
    document.body.innerHTML = `
    <input type="radio" id="side" name="side" value="small">
    <input type="radio" id="other" name="side" value="big" checked>`;

    
    let element = sero.get('side');
    expect(element.value).toEqual('big');

});

test("radio button multiple names in different forms", () => {
    document.body.innerHTML = `
    <form>
        <input type="radio" id="side" name="side" value="small">
        <input type="radio"           name="side" value="big" checked>
    </form>
    <form>
        <input type="radio" id="other" name="side" value="small" checked>
        <input type="radio"            name="side" value="big">
    </form>`;

    let element_1 = sero.get('side');
    expect(element_1.value).toEqual('big');

    let element_2 = sero.get('other');
    expect(element_2.value).toEqual('small');

    element_1.value = 'small';
    element_2.value = 'big';

    element_1 = sero.get('side');
    expect(element_1.value).toEqual('small');

    element_2 = sero.get('other');
    expect(element_2.value).toEqual('big');

});
