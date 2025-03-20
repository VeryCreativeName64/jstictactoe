export default class Elem {
  #adat;
  #index;
  constructor(adat, index, szuloElem) {
    this.#adat = adat;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.elem = document.querySelector(".elem:last-child");
    /* kattintás esemény, ahol kiváltódik a saját eseményünk, */
    this.elem.addEventListener("click", () => {
        const esemeny = new CustomEvent("kivalaszt", { detail: this.#index });
        window.dispatchEvent(esemeny);
    });
  }
  megjelenit(){
    let html = `<div class="elem">
                    ${this.#adat}
                </div>`
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
}
