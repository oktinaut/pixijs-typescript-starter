import * as PIXI from "pixi.js";
import * as gsap from "gsap";
const { TweenMax } = gsap;

import { SampleFilter } from "./filters/sample-filter";

const width = 900;
const height = 600;

const app = new PIXI.Application({ 
    width: width, 
    height: height, 
    antialias: true, 
});

document.body.appendChild(app.view);

function loadAssets() {

    PIXI.loader
        .add("assets/sprite.png")
        .load(run);
}

function run() {

    const texture = PIXI.loader.resources["assets/sprite.png"].texture;
    texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    const sprite = new PIXI.Sprite(texture);

    const filter = new SampleFilter()
    sprite.filters = [ filter ];

    sprite.pivot.set(sprite.width / 2, sprite.height / 2);
    sprite.position.set(width / 2, height / 2);
    sprite.scale.set(4);

    TweenMax.to(sprite, 2.0, { rotation: Math.PI * 2, ease: gsap.Linear.easeNone })
        .repeat(-1);
    
    app.stage.addChild(sprite);
}

loadAssets();

