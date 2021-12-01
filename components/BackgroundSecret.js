import { useState, useEffect } from "react";

function setupMatrix() {
  if (!window) return;
  const state = {
    fps: 60,
    color: "#0f0",
    charset: "MUTANTCATS魚猫ミュータントFISH",
  };

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let w, h, p;
  const resize = () => {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;

    p = Array(Math.ceil(w / 10)).fill(0);
  };
  window.addEventListener("resize", resize);
  resize();

  const random = (items) => items[Math.floor(Math.random() * items.length)];

  const draw = () => {
    ctx.fillStyle = "rgba(11,3,22,0.05)";
    // ctx.fillStyle = "rgba(255,0,0,0.05)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = state.color;

    for (let i = 0; i < p.length; i++) {
      let v = p[i];
      ctx.fillText(random(state.charset), i * 10, v);
      p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + 10;
    }
  };

  let interval = setInterval(draw, 2000 / state.fps);
  return () => {
    clearInterval(interval);
  };
}

function betterBackground() {
  var canvas = document.getElementById("canvas-slime");
  var width = (canvas.width = window.innerWidth * 0.75);
  var height = (canvas.height = window.innerHeight * 0.75);
  // document.body.appendChild(canvas);
  var gl = canvas.getContext("webgl");

  var mouse = { x: 0, y: 0 };

  var numMetaballs = 50;
  var metaballs = [];

  for (var i = 0; i < numMetaballs; i++) {
    var radius = Math.random() * 60 + 10;
    metaballs.push({
      x: Math.random() * (width - 2 * radius) + radius,
      y: Math.random() * (height - 2 * radius) + radius,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      r: radius * 0.75,
    });
  }

  var vertexShaderSrc = `
attribute vec2 position;

void main() {
// position specifies only x and y.
// We set z to be 0.0, and w to be 1.0
gl_Position = vec4(position, 0.0, 1.0);
}
`;

  var fragmentShaderSrc =
    `
precision highp float;

const float WIDTH = ` +
    (width >> 0) +
    `.0;
const float HEIGHT = ` +
    (height >> 0) +
    `.0;

uniform vec3 metaballs[` +
    numMetaballs +
    `];

void main(){
float x = gl_FragCoord.x;
float y = gl_FragCoord.y;

float sum = 0.0;
for (int i = 0; i < ` +
    numMetaballs +
    `; i++) {
vec3 metaball = metaballs[i];
float dx = metaball.x - x;
float dy = metaball.y - y;
float radius = metaball.z;

sum += (radius * radius) / (dx * dx + dy * dy);
}

if (sum >= 0.99) {
gl_FragColor = vec4(mix(vec3(0.0, y / HEIGHT, 0.0), vec3(0, 0, 0), max(0.0, 1.0 - (sum - 0.99) * 100.0)), 1.0);
return;
}

gl_FragColor = vec4(0.04, 0.01, 0.08, 1.0);
}

`;

  var vertexShader = compileShader(vertexShaderSrc, gl.VERTEX_SHADER);
  var fragmentShader = compileShader(fragmentShaderSrc, gl.FRAGMENT_SHADER);

  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  var vertexData = new Float32Array([
    -1.0,
    1.0, // top left
    -1.0,
    -1.0, // bottom left
    1.0,
    1.0, // top right
    1.0,
    -1.0, // bottom right
  ]);
  var vertexDataBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

  var positionHandle = getAttribLocation(program, "position");
  gl.enableVertexAttribArray(positionHandle);
  gl.vertexAttribPointer(
    positionHandle,
    2, // position is a vec2
    gl.FLOAT, // each component is a float
    gl.FALSE, // don't normalize values
    2 * 4, // two 4 byte float components per vertex
    0 // offset into each span of vertex data
  );

  var metaballsHandle = getUniformLocation(program, "metaballs");

  loop();
  function loop() {
    for (var i = 0; i < numMetaballs; i++) {
      var metaball = metaballs[i];
      metaball.x += metaball.vx;
      metaball.y += metaball.vy;

      if (metaball.x < metaball.r || metaball.x > width - metaball.r)
        metaball.vx *= -1;
      if (metaball.y < metaball.r || metaball.y > height - metaball.r)
        metaball.vy *= -1;
    }

    var dataToSendToGPU = new Float32Array(3 * numMetaballs);
    for (var i = 0; i < numMetaballs; i++) {
      var baseIndex = 3 * i;
      var mb = metaballs[i];
      dataToSendToGPU[baseIndex + 0] = mb.x;
      dataToSendToGPU[baseIndex + 1] = mb.y;
      dataToSendToGPU[baseIndex + 2] = mb.r;
    }
    gl.uniform3fv(metaballsHandle, dataToSendToGPU);

    //Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(loop);
  }

  function compileShader(shaderSource, shaderType) {
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
    }

    return shader;
  }

  function getUniformLocation(program, name) {
    var uniformLocation = gl.getUniformLocation(program, name);
    if (uniformLocation === -1) {
      throw "Can not find uniform " + name + ".";
    }
    return uniformLocation;
  }

  function getAttribLocation(program, name) {
    var attributeLocation = gl.getAttribLocation(program, name);
    if (attributeLocation === -1) {
      throw "Can not find attribute " + name + ".";
    }
    return attributeLocation;
  }

  canvas.onmousemove = function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };
}

export const BackgroundSecret = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window) {
      let clicks = 0;

      function handler() {
        if (clicks > 2 && clicks <= 7) {
          setActive("matrix");
        }
        if (clicks > 7) {
          setActive("slime");
          window.document.removeEventListener("click", handler);
        }

        clicks++;
      }

      window.document.addEventListener("click", handler);
    }
  }, []);

  useEffect(() => {
    if (!active) return;
    if (active === "matrix") {
      return setupMatrix();
    } else if (active === "slime") {
      return betterBackground();
    }
  }, [active]);

  return (
    <div>
      {active == "matrix" && (
        <canvas
          style={{
            background: "#0b0316",
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
          id="canvas"
        ></canvas>
      )}
      {active === "slime" && (
        <canvas
          style={{
            background: "#0b0316",
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
          id="canvas-slime"
        ></canvas>
      )}
    </div>
  );
};
