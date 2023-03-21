import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PartidaModel} from "../model/partida.model";

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit{

  @Output() gameOverEvent = new EventEmitter<PartidaModel>();
  jugadorActual: String = "humano";
  movimientoH: any[][] = [];
  movimientoPC: any[][] = []
  winer: String = "";
  partida: any = {};

  // 0->no jugado, 1->equis-PC, 2->circulo-Humano
  tablero: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  ngOnInit() {
    this.jugadorActual = "humano";
    this.movimientoPC = [];
    this.movimientoH = [];
    this.winer = "";
    this.partida = {};
    this.tablero = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  }
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
      this.prepDataPartida(this.movimientoH, this.movimientoPC, "empate", "")
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
          setTimeout(() => {
            this.validarGanador(this.jugadorActual)
          }, 100);
        }else{
          this.moverPC(this.jugadorActual)
        }
        this.jugadorActual="humano"
      }
    }else if(this.winer == ""){
      this.prepDataPartida(this.movimientoH, this.movimientoPC, "empate", "")
      alert("Es un empate")
    }
  }

  validarGanador(p: String){
    if (this.winer===""){
      if (this.tablero[0][0]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[2][2]&&this.tablero[2][2]!==0){
        if (this.tablero[0][0]===1){
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        }else{
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      }else if (this.tablero[2][0]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[0][2]&&this.tablero[0][2]!==0){
        if (this.tablero[2][0]===1){
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        }else{
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      }else if (this.tablero[2][0]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[0][2]&&this.tablero[0][2]!==0){
        if (this.tablero[2][0]===1){
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        }else{
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      }else if (this.tablero[0][0]===this.tablero[0][1]&&this.tablero[0][1]===this.tablero[0][2]&&this.tablero[0][2]!==0){
        if (this.tablero[0][0]===1){
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        }else{
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      }else if (this.tablero[1][0]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[1][2]&&this.tablero[1][2]!==0){
        if (this.tablero[1][0]===1){
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        }else{
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      }else if (this.tablero[2][0]===this.tablero[2][1]&&this.tablero[2][1]===this.tablero[2][2]&&this.tablero[2][2]!==0){
        if (this.tablero[2][0]===1){
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        }else{
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      }else if (this.tablero[0][0]===this.tablero[1][0]&&this.tablero[1][0]===this.tablero[2][0]&&this.tablero[2][0]!==0){
        if (this.tablero[0][0]===1){
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        }else{
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      }else if (this.tablero[0][1]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[2][1]&&this.tablero[2][1]!==0){
        if (this.tablero[0][1]===1){
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        }else{
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      }else if (this.tablero[0][2]===this.tablero[1][2]&&this.tablero[1][2]===this.tablero[2][2]&&this.tablero[2][2]!==0){
        if (this.tablero[0][2]===1){
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        }else{
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      }
    }
  }

  prepDataPartida(movH: any, movPC: any, winPlayer: String, movWiner: any){
    this.partida.movH = movH;
    this.partida.movPC = movPC;
    this.partida.winPlayer = winPlayer;
    this.partida.movWiner = movWiner;
    this.gameOverEvent.emit(this.partida);
  }


}
