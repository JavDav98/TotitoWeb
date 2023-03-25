import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PartidaModel} from "../model/partida.model";
import {assertCompatibleAngularVersion} from "@angular-devkit/build-angular/src/utils/version";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit{

  @Output() gameOverEvent = new EventEmitter<PartidaModel>();
  jugadorActual: String = "O";
  movimientoH: any[] = [];
  movimientoPC: any[] = [];
  winer: String = '';
  partida: any = {};
  historialPartidas = new Array<any>;
  player1: String = "O"
  jugada: any = [];
  movjugada: number = 0;
  jugde3 = []

  // 0->no jugado, 1->equis-PC, 2->circulo-Humano
  tablero: any[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

  ngOnInit() {
    this.movjugada = 0;
    this.player1 = this.jugadorActual;
    this.movimientoPC = [];
    this.movimientoH = [];
    this.winer = "";
    this.partida = {};
    this.jugada = []
    this.tablero = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
    if (this.jugadorActual == 'X'){
      this.moverPC()
    }
  }

  refresh(historico: Array<any>){
    this.ngOnInit();
    this.historialPartidas = historico;
    console.log(historico)
  }

  realizarMovimiento(fila: number, columna: number) {
    if (this.tablero[fila][columna] === '') {
      this.tablero[fila][columna] = this.jugadorActual;
      let mov: any = {
        fila: fila,
        columna: columna
      }
      if (this.jugadorActual == 'O'){
        this.movimientoH.push(mov)
      }else {
        this.movimientoPC.push(mov)
      }
      setTimeout(() => {
        this.jugadorActual = (this.jugadorActual === 'O') ? 'X' : 'O';
        if (!this.hayGanador() &&this.jugadorActual == 'X' && this.winer == ''){
          this.moverPC()
        }
      }, 100);
    }
  }

  moverPC(){
    if (this.historialPartidas.length > 0){
      this.seleccionarJugada();
    }else {
      this.movRandom()
    }
  }

  hayGanador(): boolean {
    // Comprueba si hay un ganador en las filas
    for (let fila = 0; fila < 3; fila++) {
      if (this.tablero[fila][0] === this.tablero[fila][1] && this.tablero[fila][1] === this.tablero[fila][2] && this.tablero[fila][0] !== '') {
        this.winer = (this.tablero[fila][0] === 'X') ? 'X': 'O';
        (this.winer === 'O') ? alert('¡Ganaste!'+ this.winer) : alert('¡Perdisde!' +this.winer)
        this.prepDataPartida(this.winer)
        return true;
      }
    }

    // Comprueba si hay un ganador en las columnas
    for (let columna = 0; columna < 3; columna++) {
      if (this.tablero[0][columna] === this.tablero[1][columna] && this.tablero[1][columna] === this.tablero[2][columna] && this.tablero[0][columna] !== '') {
        this.winer = (this.tablero[0][columna] === 'X') ? 'X': 'O';
        (this.winer === 'O') ? alert('¡Ganaste!'+ this.winer) : alert('¡Perdisde!' + this.winer)
        this.prepDataPartida(this.winer)
        return true;
      }
    }

    // Comprueba si hay un ganador en las diagonales
    if (this.tablero[0][0] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][2] && this.tablero[0][0] !== '') {
      this.winer = (this.tablero[0][0] === 'X') ? 'X': 'O';
      (this.winer === 'O') ? alert('¡Ganaste!' +this.winer) : alert('¡Perdisde!'+this.winer)
      this.prepDataPartida(this.winer)
      return true;
    }
    if (this.tablero[0][2] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][0] && this.tablero[0][2] !== '') {
      this.winer = (this.tablero[0][2] === 'X') ? 'X': 'O';
      (this.winer === 'O') ? alert('¡Ganaste!') : alert('¡Perdisde!')
      this.prepDataPartida(this.winer)
      return true;
    }

    if (!this.hayEspaciosVacios() && this.winer === ''){
      this.prepDataPartida('')
      alert('¡Es un empate!')
    }

    return false;
  }

  hayEspaciosVacios(): boolean {
    for (let fila = 0; fila < 3; fila++) {
      for (let columna = 0; columna < 3; columna++) {
        if (this.tablero[fila][columna] === '') {
          return true;
        }
      }
    }
    return false;
  }
  seleccionarJugada(){
      if (this.jugada.length===0){
        this.jugada = this.historialPartidas[Math.floor(Math.random() * this.historialPartidas.length)];
        console.log('Jugada seleccionada')
        console.log(this.jugada)
        console.log('Aca terminan')
      }
      if (this.tablero[this.jugada[this.movjugada].fila][this.jugada[this.movjugada].columna]===''){
        this.realizarMovimiento(this.jugada[this.movjugada].fila, this.jugada[this.movjugada].columna)
        this.movjugada++
      }else{
        for (let playing of this.historialPartidas){
          const intersection = this.movimientoH.filter(element => playing.includes(element));
          if (intersection.length === 2) {
            for (let c of playing){
              if (!intersection.includes(c)){
                this.realizarMovimiento(c.fila, c.columna)
              }
            }
          } else {
          }
        }


        this.movRandom()
      }


  }

  movRandom(){
    let fila = Math.floor(Math.random() * 3);
    let columna = Math.floor(Math.random() * 3);
    if (this.tablero[fila][columna] === '') {
      this.realizarMovimiento(fila, columna);
    }else if(this.hayEspaciosVacios()){
      this.movRandom()
    }
  }

  prepDataPartida(winPlayer: String){
    let movWin: any = (winPlayer == 'X') ? this.movimientoPC: this.movimientoH
    this.partida.movH = this.movimientoH;
    this.partida.movPC = this.movimientoPC;
    this.partida.winPlayer = winPlayer;
    this.partida.movWin = movWin;
    this.partida.tablero = this.tablero;
    this.partida.player1 = this.player1
    if (movWin.length===3){
      this.partida.winplay3 = movWin;
    }else{
      this.partida.winplay3 = [];
    }
    this.gameOverEvent.emit(this.partida);
  }


}
