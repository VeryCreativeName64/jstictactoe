import Elem from "./Elem.js";
import Info from "./Info.js";

export default class JatekTer {
  #lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  #lepes = 0;
  constructor(szuloElem) {
    let infoPanel = document.querySelector("aside");
    this.info = new Info(infoPanel);
    this.info.megjelenit("X");
    this.szuloElem = szuloElem;
    this.#megjelenit();
    this.#esemenykezelo();
  }
  #esemenykezelo() {
    window.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
      if (this.#lepes % 2 === 0) {
        this.#lista[event.detail] = "X";
        this.info.megjelenit("O");
      } else {
        this.#lista[event.detail] = "O";
        this.info.megjelenit("X");
      }
      this.#lepes++;
      this.szuloElem.innerHTML = "";
      this.#megjelenit();
    });
  }

  #megjelenit() {
    for (let index = 0; index < this.#lista.length; index++) {
      new Elem(this.#lista[index], index, this.szuloElem);
    }
  }
}
