/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generarCarta() {
    let palos = ["♣", "♦", "♥", "♠"];
    let numero = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    let objetoPalos = document.getElementsByClassName("palo");
    let objetoNumero = document.querySelector(".numero");

    let palo = palos[Math.floor(Math.random() * 4)];

    if (palo == "♥" || palo == "♦") {
      objetoPalos[0].classList.add("rojo");
      objetoPalos[1].classList.add("rojo");
    } else {
      objetoPalos[0].classList.remove("rojo");
      objetoPalos[1].classList.remove("rojo");
    }

    objetoPalos[0].innerHTML = objetoPalos[1].innerHTML = palo;
    objetoNumero.innerHTML = numero[Math.floor(Math.random() * 13)];
  }

  generarCarta();

  //parte opcional boton
  let btnGenerator = document.querySelector("#btnGenerator");
  btnGenerator.addEventListener("click", () => {
    generarCarta();
  });

  //parte opcional input
  let btnChange = document.querySelector("#btnChange");
  btnChange.addEventListener("click", () => {
    let width = document.querySelector("#cardWidth");
    let height = document.querySelector("#cardHeight");
    let card = document.querySelector(".card");
    if (height.value >= 600) {
      card.style.height = height.value + "px";
    }
    card.style.width = width.value + "px";
  });
};
