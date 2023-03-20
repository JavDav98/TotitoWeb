import { Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent {

  jugadorActual: String = "humano";
  movimientoH: any[] = [];
  movimientoPC: any[] = []
  winer: String = "";

  // 0->no jugado, 1->equis-PC, 2->circulo-Humano
  tablero: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  mover(fila: number, columna: number, player: String){
    if (this.tablero[0].includes(0)||this.tablero[1].includes(0)||this.tablero[2].includes(0)) {
      if (this.winer == "" && this.tablero[fila][columna] === 0) {
        if (this.jugadorActual==="humano"){
          this.tablero[fila][columna] = 2;
          this.movimientoH.push([fila,  columna]);
          console.log(this.tablero)
          setTimeout(() => {
            this.validarGanador(this.jugadorActual)
            this.jugadorActual = "PC";
            this.moverPC(this.jugadorActual)
          }, 100);
        }
      }
    }else if(this.winer == ""){
      alert("Es un empate")
    }

  }

  moverPC(player: String){
    if (this.tablero[0].includes(0)||this.tablero[1].includes(0)||this.tablero[2].includes(0)) {
      let fila = Math.floor(Math.random() * 3);
      let columna = Math.floor(Math.random() * 3);
      if (this.winer === "" && this.jugadorActual === "PC"){
        if (this.tablero[fila][columna] === 0){
            this.tablero[fila][columna] = 1;
            this.movimientoPC.push([fila,  columna]);
          }else{
            this.moverPC(this.jugadorActual)
          }
          this.jugadorActual="humano"
        }
    }else if(this.winer == ""){
      alert("Es un empate")
    }
  }

  validarGanador(p: String){
    if (this.winer===""){
      if (this.tablero[0][0]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[2][2]&&this.tablero[2][2]!==0){
        if (this.tablero[0][0]===1){
          this.winer = "PC";
          alert("¡Perdiste!")
        }else{
          this.winer = p;
          alert("¡Ganaste!")
        }
      }else if (this.tablero[2][0]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[0][2]&&this.tablero[0][2]!==0){
        if (this.tablero[2][0]===1){
          this.winer = "PC";
          alert(this.winer)
        }else{
          this.winer = p;
          alert(this.winer)
        }
      }else if (this.tablero[2][0]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[0][2]&&this.tablero[0][2]!==0){
        if (this.tablero[2][0]===1){
          this.winer = "PC";
          alert(this.winer)
        }else{
          this.winer = p;
          alert(this.winer)
        }
      }else if (this.tablero[0][0]===this.tablero[0][1]&&this.tablero[0][1]===this.tablero[0][2]&&this.tablero[0][2]!==0){
        if (this.tablero[0][0]===1){
          this.winer = "PC";
          alert(this.winer)
        }else{
          this.winer = p;
          alert(this.winer)
        }
      }else if (this.tablero[1][0]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[1][2]&&this.tablero[1][2]!==0){
        if (this.tablero[1][0]===1){
          this.winer = "PC";
          alert(this.winer)
        }else{
          this.winer = p;
          alert(this.winer)
        }
      }else if (this.tablero[2][0]===this.tablero[2][1]&&this.tablero[2][1]===this.tablero[2][2]&&this.tablero[2][2]!==0){
        if (this.tablero[2][0]===1){
          this.winer = "PC";
          alert(this.winer)
        }else{
          this.winer = p;
          alert(this.winer)
        }
      }else if (this.tablero[0][0]===this.tablero[1][0]&&this.tablero[1][0]===this.tablero[2][0]&&this.tablero[2][0]!==0){
        if (this.tablero[0][0]===1){
          this.winer = "PC";
          alert(this.winer)
        }else{
          this.winer = p;
          alert(this.winer)
        }
      }else if (this.tablero[0][1]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[2][1]&&this.tablero[2][1]!==0){
        if (this.tablero[0][1]===1){
          this.winer = "PC";
          alert(this.winer)
        }else{
          this.winer = p;
          alert(this.winer)
        }
      }else if (this.tablero[0][2]===this.tablero[1][2]&&this.tablero[1][2]===this.tablero[2][2]&&this.tablero[2][2]!==0){
        if (this.tablero[0][2]===1){
          this.winer = "PC";
          alert(this.winer)
        }else{
          this.winer = p;
          alert(this.winer)
        }
      }
      if (this.winer != ""){
        console.log(`Movimientos del jugador ${this.movimientoH[0]}`)
        console.log(`Movimientos del jugador ${this.movimientoPC[1]}`)
      }
    }
  }


}
