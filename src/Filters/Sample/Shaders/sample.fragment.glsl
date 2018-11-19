precision highp float;

// Uniforms
uniform float time;
uniform sampler2D uSampler;

// Varying
varying vec2 vTextureCoord;


void main(void) {
    gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(1., 0., 1., 1.);
}