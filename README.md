# BABYLON.js Typescript Starter

This Repository contains a sample PixiJS application.

## Setup

Run the following commands from within the repository's root folder to setup the application:

1. `npm install`

## Running

Run the following commands from within the repository's root folder to run the project using `webpack-dev-server`:

1. `npm start`

## Build

Run the following commands from within the repository's root folder to build the project using `webpack`:

1. `npm run build`

## Structure

- `src/` *source code folder*

    - `index.ts` *application entry point*

    - `glsl.d.ts` *typescript definition file to resolve .glsl files*

    - `filters/` *folder for custom filters/shaders*

        - `sample-filter.ts` *sample custom filter*

        - `glsl/` *folder containing GLSL shader code*

            - `sample.fragment.glsl` *sample fragment shader*

- `public` *folder containing static assets*

    - `index.html` *HTML entry point*

- `dist` *folder containing output of build process*
