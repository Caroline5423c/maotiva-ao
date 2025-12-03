const letreiro = document.getElementById("letreiro");
const container = document.querySelector(".container");

let pos = 0;                 // posição inicial
let direction = 1;           // 1 = direita, -1 = esquerda
const speed = 2;             // controle da velocidade (px por frame)

function animar() {
  const maxPos = container.offsetWidth - letreiro.offsetWidth;

  pos += direction * speed;

  // inverter direção ao chegar nas extremidades
  if (pos >= maxPos) {
    direction = -1;
  } else if (pos <= 0) {
    direction = 1;
  }

  letreiro.style.left = pos + "px";
  requestAnimationFrame(animar);
}

// inicializa posição
letreiro.style.position = "absolute";
letreiro.style.left = pos + "px";

animar();