import * as PIXI from "pixi.js";

import * as sampleFragmentShader from "./Shaders/sample.fragment.glsl";

interface ISampleFilterUniforms {

}

export class SampleFilter extends PIXI.Filter<ISampleFilterUniforms> {

    constructor() {
        super(PIXI.Filter.defaultVertexSrc, sampleFragmentShader);
    }
}
