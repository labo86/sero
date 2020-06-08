import * as sero from '../src/index.js';
import {expect} from "@jest/globals";

test("handle array element", () => {
    document.body.innerHTML = `
<div id="test" data-sero-type="array" data-sero-item="item-template">
</div>
<template id="item-template">
  <div data-sero-type="object">
    <label>Name:</label><input type="text" name="name"/><br/>
    <label>Age:</label><input type="number" name="age"/>
  </div>
</template>
    `;

    let element = sero.get('test');

    element.value =  [{name: 'Edwin', age: 99}, {name: 'Some', age: 20}];

    let values = element.value;
    expect(values.length).toEqual( 2);
    expect(
        values[0]).toEqual(
        {name: 'Edwin', age: 99}
    );

    expect(
        values[1]).toEqual(
        {name: 'Some', age: 20}
    );

    element.add({name: 'Other', age: 11});


    values = element.value;
    expect(values.length).toEqual( 3);

    expect(
        values[0]).toEqual(
        {name: 'Edwin', age: 99}
    );

    expect(
        values[1]).toEqual(
        {name: 'Some', age: 20}
    );

    expect(
        values[2]).toEqual(
        {name: 'Other', age: 11}
    );

});
