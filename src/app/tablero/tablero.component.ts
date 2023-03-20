import { Component, Input} from '@angular/core';

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
    if (this.jugadorActual==="humano"){
      this.tablero[fila][columna] = 2;
      this.movimientoH.push([fila,  columna]);
      console.log(this.tablero)
    }else {
      this.tablero[fila][columna] = 1;
      this.movimientoPC.push([fila,  columna]);
    }
    this.validarGanador();
  }

  validarGanador(){
    if (this.tablero[0][0]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[2][2]){
      alert(this.tablero[0][0])
    }else if (this.tablero[2][0]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[0][2]){
      alert(this.tablero[2][0])
    }else if (this.tablero[0][0]===this.tablero[0][1]&&this.tablero[0][1]===this.tablero[0][2]){
      alert(this.tablero[0][0])
    }else if (this.tablero[1][0]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[1][2]){
      alert(this.tablero[1][0])
    }else if (this.tablero[2][0]===this.tablero[2][1]&&this.tablero[2][1]===this.tablero[2][2]){
      alert(this.tablero[2][0])
    }else if (this.tablero[0][0]===this.tablero[1][0]&&this.tablero[1][0]===this.tablero[2][0]){
      alert(this.tablero[0][0])
    }else if (this.tablero[0][1]===this.tablero[1][1]&&this.tablero[1][1]===this.tablero[2][1]){
      alert(this.tablero[0][1])
    }else if (this.tablero[0][2]===this.tablero[1][2]&&this.tablero[1][2]===this.tablero[2][2]){
      alert(this.tablero[0][2])
    }
  }

}
