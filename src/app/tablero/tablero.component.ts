import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PartidaModel} from "../model/partida.model";
import {assertCompatibleAngularVersion} from "@angular-devkit/build-angular/src/utils/version";

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit{

  @Output() gameOverEvent = new EventEmitter<PartidaModel>();
  jugadorActual: String = "humano";
  movimientoH: any[] = [];
  movimientoPC: any[] = [];
  winer: String = "";
  partida: any = {};
  historialPartidas = new Array<any>;
  player1: String = "humano"
  jugada: any = [];
  movjugada: number = 0;

  // 0->no jugado, 1->equis-PC, 2->circulo-Humano
  tablero: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  ngOnInit() {
    this.movjugada = 0;
    this.player1 = this.jugadorActual;
    this.movimientoPC = [];
    this.movimientoH = [];
    this.winer = "";
    this.partida = {};
    this.tablero = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    this.moverPC(this.jugadorActual)
  }

  refresh(historico: Array<any>){
    this.ngOnInit();
    this.historialPartidas = historico;
  }
  mover(fila: number, columna: number, player: String){
      if (this.winer === "" && this.tablero[fila][columna] === 0) {
        if (this.jugadorActual===player){
          this.tablero[fila][columna] = 2;
          let mov: any = {
            fila: fila,
            columna: columna
          }
          this.movimientoH.push(mov);
          setTimeout(() => {
            this.validarGanador(this.jugadorActual)
            this.jugadorActual = "PC";
            this.moverPC(this.jugadorActual)
          }, 100);
        }
      }
  }

  moverPC(player: String){//else {
      //}
      if (this.winer===""&&this.jugadorActual==="PC") {
        if (this.historialPartidas.length > 0) {
          this.validarSimilitudesPartida();
        } else {
          let fila = Math.floor(Math.random() * 3);
          let columna = Math.floor(Math.random() * 3);
          if (this.tablero[fila][columna] === 0) {
            this.tablero[fila][columna] = 1;
            let mov: any = {
              fila: fila,
              columna: columna
            }
            this.movimientoPC.push(mov);
            setTimeout(() => {
              this.validarGanador(this.jugadorActual)
            }, 100);
          } else {
            this.moverPC(this.jugadorActual)
          }
          this.jugadorActual = "humano"
        }
      }

  }

  validarGanador(p: String){
    if (this.winer === "") {
      if (this.tablero[0][0] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][2] && this.tablero[2][2] !== 0) {
        if (this.tablero[0][0] === 1) {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        } else {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      } else if (this.tablero[2][0] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[0][2] && this.tablero[0][2] !== 0) {
        if (this.tablero[2][0] === 1) {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        } else {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      } else if (this.tablero[2][0] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[0][2] && this.tablero[0][2] !== 0) {
        if (this.tablero[2][0] === 1) {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        } else {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      } else if (this.tablero[0][0] === this.tablero[0][1] && this.tablero[0][1] === this.tablero[0][2] && this.tablero[0][2] !== 0) {
        if (this.tablero[0][0] === 1) {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        } else {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      } else if (this.tablero[1][0] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[1][2] && this.tablero[1][2] !== 0) {
        if (this.tablero[1][0] === 1) {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        } else {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      } else if (this.tablero[2][0] === this.tablero[2][1] && this.tablero[2][1] === this.tablero[2][2] && this.tablero[2][2] !== 0) {
        if (this.tablero[2][0] === 1) {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        } else {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      } else if (this.tablero[0][0] === this.tablero[1][0] && this.tablero[1][0] === this.tablero[2][0] && this.tablero[2][0] !== 0) {
        if (this.tablero[0][0] === 1) {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        } else {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      } else if (this.tablero[0][1] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][1] && this.tablero[2][1] !== 0) {
        if (this.tablero[0][1] === 1) {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        } else {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      } else if (this.tablero[0][2] === this.tablero[1][2] && this.tablero[1][2] === this.tablero[2][2] && this.tablero[2][2] !== 0) {
        if (this.tablero[0][2] === 1) {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, "PC", this.movimientoPC)
          this.winer = "PC";
          alert("¡Perdiste!")
        } else {
          this.prepDataPartida(this.movimientoH, this.movimientoPC, p, this.movimientoH)
          this.winer = p;
          alert("¡Ganaste!")
        }
      }
    }
    if (!this.tablero[0].includes(0)&&!this.tablero[1].includes(0)&&!this.tablero[2].includes(0)&&this.winer == ""){
      let a: any;
      this.winer = "empate"
      this.prepDataPartida(this.movimientoH, this.movimientoPC, "empate",a)
      alert("¡Es un empate!")
    }


  }

  validarSimilitudesPartida(){

    if (this.player1 == "PC"){
      let partProbables = this.historialPartidas.filter(partida => partida.player1 === "PC");
      let partidasPCwiner = partProbables.filter(partida => partida.winerPlayer = "PC")
      let jugadasW = [];
      for (let p of partidasPCwiner){
        jugadasW.push(p.movWin)
      }
      let uniquePart = jugadasW.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
      console.log("Jugadas unicas")
      console.log(uniquePart)
      if (partidasPCwiner.length > 0){
        if (this.jugada.length == 0){
          this.jugada = partidasPCwiner[Math.floor(Math.random() * partidasPCwiner.length)].movWin;
        }
        console.log("Jugadas seleccionadas")
        console.log(this.jugada)
        let fila = this.jugada[this.movjugada].fila
        let columna = this.jugada[this.movjugada].columna
        this.movjugada++
        if (this.tablero[fila][columna] === 0) {
          this.tablero[fila][columna] = 1
          this.jugadorActual = "humano"
        }
      }else{
        let fila = Math.floor(Math.random() * 3);
        let columna = Math.floor(Math.random() * 3);
        if (this.tablero[fila][columna] === 0) {
          this.tablero[fila][columna] = 1;
          let mov: any = {
            fila: fila,
            columna: columna
          }
          this.movimientoPC.push(mov);
          setTimeout(() => {
            this.validarGanador(this.jugadorActual)
          }, 100);
        } else {
          this.moverPC(this.jugadorActual)
        }
        this.jugadorActual = "humano"
      }
    }else{
      let fila = Math.floor(Math.random() * 3);
      let columna = Math.floor(Math.random() * 3);
      if (this.tablero[fila][columna] === 0) {
        this.tablero[fila][columna] = 1;
        let mov: any = {
          fila: fila,
          columna: columna
        }
        this.movimientoPC.push(mov);
        setTimeout(() => {
          this.validarGanador(this.jugadorActual)
        }, 100);
      } else {
        this.moverPC(this.jugadorActual)
      }
      this.jugadorActual = "humano"

    }
/*
    let mayorPuntaje = 0;
    let partidaspunteadas: any[] = [];

    for (let p of this.historialPartidas){
      let punteado = {punto: 0, partida: {}}
      for (let f = 0; f < 3; f++){
        for (let c = 0; c < 3; c++){
          if (this.tablero[f][c] == p.tablero[f][c] && this.tablero[f][c]!=0){
            //punteado.punto++;
          }
        }

        for (let m of this.movimientoPC){
          for (let mw of p.movWin){
            if (m[0] == mw[0] && m[1] == mw[1]){
              punteado.punto++
              console.log("Mas 1 punto")
              console.log(`Movimeintos del PC ${m[0]}`)
              console.log(`Movimeintos del PC ${m[1]}`)
              console.log(`Movimeintos del Winer ${mw[0]}`)
              console.log(`Movimeintos del Winer ${mw[1]}`)

            }
          }
        }
      }

      let movWin: any;
      if  (p.winPlayer == p.player1 && this.player1 == "PC"){
        console.log("EL ganador fue p1 y PC es el actual p1")
        //movWin = p.movPC
      }else if  (p.winPlayer != p.player1 && this.player1 != "PC"){
        console.log("EL ganador no fue p1 y pc no es el actual p1")
        movWin = p.movH
      }

      if (mayorPuntaje < punteado.punto){
        mayorPuntaje = punteado.punto;
      }
      punteado.partida = p;
      partidaspunteadas.push(punteado);
    }

    let partProbables = partidaspunteadas.filter(partida => partida.punto === mayorPuntaje);
    console.log("Partidas punteadas")
    console.log(partProbables)
    console.log("Terminan *********")*/
  }

  prepDataPartida(movH: any, movPC: any, winPlayer: String, movWin: any){
    this.partida.movH = movH;
    this.partida.movPC = movPC;
    this.partida.winPlayer = winPlayer;
    this.partida.movWin = movWin;
    this.partida.tablero = this.tablero;
    this.partida.player1 = this.player1
    this.gameOverEvent.emit(this.partida);
  }


}
