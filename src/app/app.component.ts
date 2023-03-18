import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 0->no jugado, 1->equis, 2->circulo
  tablero: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  actuar(fila: number, columna: number){
    console.log(fila,columna)

  }


}
