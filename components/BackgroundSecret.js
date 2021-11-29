import { useState, useEffect } from "react";

function setupMatrix() {
  if (!window) return;
  const state = {
    fps: 60,
    color: "#0f0",
    charset: "0123456789ABCDEF",
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

export const BackgroundSecret = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window) {
      let clicks = 0;

      window.document.addEventListener("click", () => {
        if (clicks > 5) {
          setActive(true);
        }

        clicks++;
      });
    }
  }, []);
  useEffect(() => {
    if (!active) return;
    return setupMatrix();
  }, [active]);

  return (
    <div>
      <canvas
        style={{
          background: "#0b0316",
          opacity: 0.3,
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        id="canvas"
      ></canvas>
    </div>
  );
};
