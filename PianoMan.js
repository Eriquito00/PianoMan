"use strict";

///////////////////////////////////////////////////////////
// Alumnes: Eric Mejias - David Catalan
///////////////////////////////////////////////////////////

import { audios, touchKey, addStyle, removeStyle, getVisualKey, addKeys, removeKeys } from "./lib_piano.js";

const piano = document.getElementById("piano");
const textFile = document.getElementById("textFile");
const textarea = document.getElementById("textarea");
const activeKeys = new Set();

let activeMouse = null;
let readerText = new FileReader();

/**
 * Evento para detectar cuando se le da a las teclas
 */
document.body.addEventListener("keydown", (e) => {
    const keyCode = e.keyCode;
    if (audios[keyCode] && !e.repeat) {
        const elemento = document.getElementById("k" + getVisualKey(keyCode));
        if (elemento) addStyle(elemento);
    }
    touchKey(keyCode, e);
});

/**
 * Evento para detectar cuando se suelta una tecla
 */
document.body.addEventListener("keyup", (e) => {
    const keyCode = e.keyCode;
    const elemento = document.getElementById("k" + getVisualKey(keyCode));
    if (elemento) removeStyle(elemento);
});

/**
 * Evento para detectar cuando se le da click
 */
piano.addEventListener("mousedown", (e) => {
    if (e.button === 0 && e.target.tagName.toUpperCase() === "RECT") {
        const id = parseInt(e.target.id.substring(1));
        activeMouse = e.target;
        addStyle(e.target);
        touchKey(id, e);
    }
});

/**
 * Evento para detectar cuando se suelta el click
 */
piano.addEventListener("mouseup", (e) => {
    if (e.button === 0 && e.target.tagName.toUpperCase() === "RECT") {
        if (activeMouse) {
            removeStyle(activeMouse);
            activeMouse = null;
        }
    }
});

/**
 * Evento para cuando le das tactil a las teclas
 */
piano.addEventListener("touchstart", (e) => {
    e.preventDefault();
    addKeys(e, activeKeys);
});

/**
 * Evento para cuando dejas de darle tactil a las teclas
 */
piano.addEventListener("touchend", (e) => {
    e.preventDefault();
    removeKeys(e, activeKeys);
});

/**
 * Comprueba cuando mantienes el tactil y vas moviendo entreteclas
 */
piano.addEventListener("touchmove", (e) => {
    e.preventDefault();
    addKeys(e, activeKeys);
    removeKeys(e, activeKeys);
});

textFile.addEventListener("change", (e) => {
    const files = e.target.files;
    readerText.readAsText(files[0]);
});

readerText.onload = (e) => {
    textarea.value = e.target.result;
}