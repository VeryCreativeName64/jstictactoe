export default class Info{
    constructor(szuloElem){
        this.szuloElem=szuloElem;
        
        
    }

    megjelenit(jatekos){
        this.szuloElem.innerHTML = jatekos + " következik";
      }
    
}