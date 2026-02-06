"use strict";

///////////////////////////////////////////////////////////
// Alumnes: Eric Mejias - David Catalan
///////////////////////////////////////////////////////////

import { audios, touchKey, addStyle, removeStyle, getVisualKey, addKeys, removeKeys } from "./lib/lib_piano.js";

const piano = document.getElementById("piano");
const textFile = document.getElementById("textFile");
const textarea = document.getElementById("textarea");
const activeKeys: Set<number> = new Set();

let activeMouse: Element | null = null;
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
piano!.addEventListener("mousedown", (e: MouseEvent) => {
    if (e.button === 0 && (e.target as Element).tagName.toUpperCase() === "RECT") {
        const id = parseInt((e.target as Element).id.substring(1));
        activeMouse = e.target as Element;
        addStyle(e.target as Element);
        touchKey(id, e);
    }
});

/**
 * Evento para detectar cuando se suelta el click
 */
piano!.addEventListener("mouseup", (e) => {
    if (e.button === 0 && (e.target as Element).tagName.toUpperCase() === "RECT") {
        if (activeMouse) {
            removeStyle(activeMouse);
            activeMouse = null;
        }
    }
});

/**
 * Evento para cuando le das tactil a las teclas
 */
piano!.addEventListener("touchstart", (e) => {
    e.preventDefault();
    addKeys(e, activeKeys);
});

/**
 * Evento para cuando dejas de darle tactil a las teclas
 */
piano!.addEventListener("touchend", (e) => {
    e.preventDefault();
    removeKeys(e, activeKeys);
});

/**
 * Comprueba cuando mantienes el tactil y vas moviendo entreteclas
 */
piano!.addEventListener("touchmove", (e) => {
    e.preventDefault();
    addKeys(e, activeKeys);
    removeKeys(e, activeKeys);
});

textFile!.addEventListener("change", (e) => {
    const files = (e.target as HTMLInputElement).files;
    readerText.readAsText(files![0]);
});

readerText.onload = (e) => {
    (textarea as HTMLTextAreaElement)!.value = (e.target as FileReader).result as string;
}