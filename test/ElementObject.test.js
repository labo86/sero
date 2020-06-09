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

test("handle object element", () => {
    document.body.innerHTML = `
<div id="test" data-sero-type="object">
    <div data-sero-name="full_name" data-sero-type="object">
        <h1>Name</h1>
        <label>First name:</label><input type="text" name="name" value="Edwin"/><br/>
        <label>Surname:</label><input type="text" name="surname" value="Rodríguez"/><br/>
    </div>
    <label>Age:</label><input type="number" name="age" value="22"/><br/>
    <label>Best:</label><input type="checkbox" name="best" checked/><br/>
</div>
    `;

    let element = sero.get('test');
    expect(
        element.value).toEqual(
        { full_name : { name: 'Edwin', surname: 'Rodríguez'}, age: 22, best: true}
        );

    element.value =  { full_name : { name: 'Some', surname: 'Surname'}, age: 30, best: false};

    expect(element.value).toEqual( { full_name : { name: 'Some', surname: 'Surname'}, age: 30, best: false});

    expect(
        element.getElement('full_name').value).toEqual(
        { name: 'Some', surname: 'Surname'}
    );


});


test("handle object element null", () => {
    document.body.innerHTML = `
<div id="test" data-sero-type="object">
</div>
    `;

    let element = sero.get('test');
    expect(element.getElement('hola')).toBeNull();


});

test("handle object element from form", () => {
    document.body.innerHTML = `
<form id="test">
    <label>First name:</label><input type="text" name="name" value="Edwin"/><br/>
    <label>Surname:</label><input type="text" name="surname" value="Rodríguez"/><br/>
    </div>
</form>
    `;

    let element = sero.get('test');
    expect(
        element.value).toEqual(
        { name: 'Edwin', surname: 'Rodríguez'}
    );

    element.value =  { name: 'Some', surname: 'Surname'};

    expect(element.value).toEqual( { name: 'Some', surname: 'Surname'});

});
