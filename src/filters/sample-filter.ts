import * as PIXI from "pixi.js";

import * as sampleFragmentShader from "./glsl/sample.fragment.glsl";

export class SampleFilter extends PIXI.Filter<null> {

    constructor() {
        super(PIXI.Filter.defaultVertexSrc, sampleFragmentShader);
    }
}