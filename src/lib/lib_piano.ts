export const audios: Record<number, string> = {
    65: "./audio/c1.mp3",
    83: "./audio/d1.mp3",
    68: "./audio/e1.mp3",
    70: "./audio/f1.mp3",
    71: "./audio/g1.mp3",
    72: "./audio/a1.mp3",
    74: "./audio/b1.mp3",
    81: "./audio/g1.mp3",
    87: "./audio/a1.mp3",
    69: "./audio/b1.mp3",
    75: "./audio/c2.mp3",
    76: "./audio/d2.mp3",
    192: "./audio/e2.mp3",
    82: "./audio/c2.mp3",
    84: "./audio/d2.mp3",
    89: "./audio/e2.mp3",
    85: "./audio/f2.mp3",
    73: "./audio/g2.mp3",
    79: "./audio/a2.mp3",
    80: "./audio/b2.mp3",
    49: "./audio/c1s.mp3",
    50: "./audio/d1s.mp3",
    51: "./audio/f1s.mp3",
    52: "./audio/g1s.mp3",
    53: "./audio/a1s.mp3",
    54: "./audio/c2s.mp3",
    55: "./audio/d2s.mp3",
    56: "./audio/f2s.mp3",
    57: "./audio/g2s.mp3",
    48: "./audio/a2s.mp3"
};

export const keyMapping: Record<number,number> = {
    75: 82,
    76: 84,  
    192: 89,
    81: 71,
    87: 72,
    69: 74
};

/**
 * Comprueba si existe audio en esa tecla y si ya se esta reproduciendo
 * @param {*} pos Numero de la tecla
 * @param {*} e Evento correspondiente
 */
export function touchKey(pos: number, e: KeyboardEvent | MouseEvent) {
    if (e instanceof MouseEvent && audios[pos]) {
        playAudio(pos);
    }
    else if (e instanceof KeyboardEvent && audios[pos] && !e.repeat) {
        playAudio(pos);
    }
}

/**
 * Empieza a reproducir un audio
 * @param {*} pos Numero clave para identificar el audio
 */
export function playAudio(pos: number) {
    new Audio(audios[pos]).play();
}

/**
 * Añade el estilo "activo" a la tecla pulsada
 * @param {*} element Tecla pulsada
 */
export function addStyle(element: Element) {
    element.classList.add("activa");
}

/**
 * Quita el estilo "activo" a la tecla que ya no esta pulsada
 * @param {*} element Tecla ya no pulsada
 */
export function removeStyle(element: Element) {
    element.classList.remove("activa");
}

/**
 * Obtiene el keyCode de las teclas duplicadas
 * @param {number} keyCode KeyCode presionado
 * @returns {number} KeyCode redirijido
 */
export function getVisualKey(keyCode: number) {
    return keyMapping[keyCode] || keyCode;
}

/**
 * Añade nuevas teclas que se han tocado a un Set que guarda todas las teclas que se estan tocando
 * @param {*} e Evento correspondiente
 */
export function addKeys(e: TouchEvent, activeKeys: Set<number>) {
    const touches = e.touches;

    for (const touch of touches) {
        const elemento = document.elementFromPoint(touch.clientX, touch.clientY);
    
        if (elemento && elemento.tagName.toUpperCase() === "RECT") {
            const id = parseInt(elemento.id.substring(1));
            
            if (audios[id] && !activeKeys.has(id)) {
                activeKeys.add(id);
                playAudio(id);
                addStyle(elemento);
            }
        }
    }
}

/**
 * Quita teclas que se han dejado de tocar del Set que guarda las teclas que se estan tocando
 * @param {*} e Evento correspondiente
 */
export function removeKeys(e: TouchEvent, activeKeys: Set<number>) {
    const pressedKeys = new Set();

    for (const touch of e.touches) {
        const elemento = document.elementFromPoint(touch.clientX, touch.clientY);
        
        if (elemento && elemento.tagName.toUpperCase() === "RECT") {
            const id = parseInt(elemento.id.substring(1));
            pressedKeys.add(id);
        }
    }

    activeKeys.forEach((id) => {
        if (!pressedKeys.has(id)) {
            activeKeys.delete(id);
            const elemento = document.getElementById("k" + id);
            if (elemento) {
                removeStyle(elemento);
            }
        }
    });
}

