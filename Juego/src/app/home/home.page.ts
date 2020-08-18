import {Component} from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';


@Component({
    templateUrl: './home.page.html'
})
export class HomePage {
    public inputValue = "";
    public actualJugador = "";
    public count = 1;
    public jugador = false;
    public msg = "";
    public jugadorUnoTotal = 0;
    public jugadorDosTotal = 0;
    public gana = [7, 56, 448, 73, 146, 292, 273, 84];

  constructor(private nav: NavController) {

  }
  revGan(total){
    for(var i = 0; i < this.gana.length; i++){
        if((this.gana[i] & total)  === this.gana[i]){
            if(this.actualJugador == "Jugador Uno"){
                this.nuevoJuego();
                alert("Jugador 1 Gana");
            } else{
                this.nuevoJuego();
                alert("Jugador 2 Gana");
            }
        }    
    }
    if(this.count == 10){
        alert(":(");
        this.nuevoJuego();
    }
}

placeTile(param){
    console.log("param " + param);
    this.count += 1;
    if(this.count %2 == 0){
      this.actualJugador = "Jugador Uno";
      console.log(this.actualJugador);
      var tile = <HTMLInputElement> document.getElementById(param);
      tile.disabled = true;
      document.getElementById(param).textContent="X";
      this.jugadorUnoTotal += Number(param);
      console.log("Jugador 1's total:" + this.jugadorUnoTotal);
      this.revGan(this.jugadorUnoTotal);
    }
    else if(this.count %2 != 0){
      this.actualJugador = "Jugador Dos";
      this.msg= "O";
      var tile = <HTMLInputElement> document.getElementById(param);
      tile.disabled = true;
      this.jugadorDosTotal += Number(param);
      document.getElementById(param).textContent="O";
      console.log("Jugador 2's total:"+this.jugadorDosTotal);          
      this.revGan(this.jugadorDosTotal);
    }
}

nuevoJuego(){
    console.log("Empezar nuevo Juego");
    for(var i = 1; i < 512; i*2 ){
        var tile = <HTMLInputElement> document.getElementById(i.toString()); 
        if(tile != null || tile != undefined){
            tile.textContent="";
            tile.disabled = false;
            i+=i;
            console.log(i);
        }
    }
    this.jugadorUnoTotal = 0;
    this.jugadorDosTotal = 0;
    this.count=1;
    }

}