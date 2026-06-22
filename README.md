# 🎹 PianoMan

PianoMan es una aplicación web desarrollada en JavaScript/TypeScript que simula un piano interactivo. Permite reproducir notas musicales utilizando el teclado físico, el ratón o dispositivos táctiles, ofreciendo una experiencia multiplataforma y accesible desde el navegador.

## Características

- 🎹 Piano virtual interactivo.
- ⌨️ Reproducción mediante teclado físico.
- 🖱️ Soporte para interacción con ratón.
- 📱 Compatibilidad con dispositivos táctiles.
- ✨ Resaltado visual de las teclas activadas.
- 📄 Carga y visualización de archivos de texto.
- 🔄 Emulación de eventos táctiles en navegadores sin soporte nativo.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- TypeScript
- SVG para la representación gráfica del piano

## Estructura del proyecto

```text
PianoMan/
├── docs/
│   └── index.html
├── src/
│   ├── PianoMan.ts
│   └── Touch.ts
├── tsconfig.json
├── LICENSE
└── README.md
```

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/usuario/PianoMan.git
```

2. Accede al directorio:

```bash
cd PianoMan
```

3. Compila los archivos TypeScript:

```bash
tsc
```

4. Abre el archivo `docs/index.html` en tu navegador o despliega el contenido en un servidor web.

## Uso

### Reproducir notas

- Presiona las teclas asignadas en el teclado.
- Haz clic sobre las teclas del piano con el ratón.
- Utiliza gestos táctiles en dispositivos móviles o tablets.

### Cargar archivos

La aplicación incluye un selector de archivos que permite cargar archivos `.txt` y mostrar su contenido en el área de texto integrada.

#### [**TAMBIÉN PUEDES PROBARLO AQUÍ**](https://eriquito00.github.io/PianoMan/)

## Compatibilidad táctil

El proyecto incorpora un emulador de eventos táctiles (`Touch.ts`) para facilitar las pruebas y el funcionamiento en entornos donde los eventos táctiles no están disponibles de forma nativa.

## Objetivos del proyecto

Este proyecto fue desarrollado como práctica de:

- Gestión de eventos de teclado.
- Gestión de eventos de ratón.
- Gestión de eventos táctiles.
- Manipulación del DOM.
- Desarrollo con TypeScript.
- Interfaces interactivas en navegador.

## Licencia

Este proyecto se distribuye bajo la licencia incluida en el archivo `LICENSE`.

###### BY: **[Eriquito00](https://github.com/Eriquito00)**
