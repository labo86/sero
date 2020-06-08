import * as sero from '../src/core.js';
import {expect} from "@jest/globals";

test("normalize normal", () => {
    document.body.innerHTML = "<div id='test'>hello!</div>";
    let element = document.getElementById('test');
    expect(sero.normalizeElement(element)).toBe(element);
});

test("normalize null", () => {
    expect(() => { sero.normalizeElement(null)}).toThrowError("Element is null");
});

test("normalize not html element", () => {
    expect(() => { sero.normalizeElement(123)}).toThrowError("Not an HTMLElement");
});


test("plain type", () => {
    document.body.innerHTML = "<div id='test'>hello!</div>";
    let element = document.getElementById('test');
    expect(sero.getType(element)).toEqual('plain');
});

test("img type", () => {
    document.body.innerHTML = "<img id='test' src='data:dfasdf'/>";
    let element = document.getElementById('test');
    expect('image').toEqual(sero.getType(element));
});

test("img type override", () => {
    document.body.innerHTML = "<img id='test' data-sero-type='some' src='data:dfgadfasdf'/>";
    let element = document.getElementById('test');
    expect('some').toEqual(sero.getType(element));
});

test("img type override", () => {
    document.body.innerHTML = "<img id='test' data-sero-type='some' src='data:asdfadasdf'/>";
    let element = document.getElementById('test');
    expect('some').toEqual(sero.getType(element));
});

test("text area type", () => {
    document.body.innerHTML = "<textarea id='test'></textarea><textarea/>";
    let element = document.getElementById('test');
    expect('input_text').toEqual(sero.getType(element));
});

test("input text type", () => {
    document.body.innerHTML = "<input id='test' type='text'>";
    let element = document.getElementById('test');
    expect('input_text').toEqual(sero.getType(element));
});