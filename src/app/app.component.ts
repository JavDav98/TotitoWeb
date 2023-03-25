import {Component, ViewChild} from '@angular/core';
import {TableroComponent} from "./tablero/tablero.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('tablero') tableroComponent!: TableroComponent;
  historicoWiner: any[] = [];
  perdidos: number = 0;
  ganadas: number = 0;
  empates: number = 0;
  jugadas: number = 0;
  winplay3: any[] = []

  contarPartidas(partida: any){
    if (partida.winPlayer == "X"){
      this.historicoWiner.push(partida)
      if (partida.winplay3.length === 3){
        this.winplay3.push(partida.winplay3)
      }
      this.perdidos++;
    }else if(partida.winPlayer == "O"){
      this.historicoWiner.push(partida)
      if (partida.winplay3.length === 3){
        this.winplay3.push(partida.winplay3)
      }
      this.ganadas++;
    }else{
      this.empates++;
    }
    this.jugadas++;
  }

  nuevaPartida(){
    console.log(this.winplay3)
    this.tableroComponent.refresh(this.winplay3);
  }

  reset(){
    this.historicoWiner = [];
    this.perdidos = 0;
    this.ganadas = 0;
    this.empates = 0;
    this.jugadas = 0;
    this.winplay3 = []
    this.nuevaPartida()
  }
}
