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

  contarPartidas(partida: any){
    if (partida.winPlayer == "PC"){
      this.historicoWiner.push(partida)
      this.perdidos++;
    }else if(partida.winPlayer == "humano"){
      this.historicoWiner.push(partida)
      this.ganadas++;
    }else{
      this.empates++;
    }
    this.jugadas++;
  }

  nuevaPartida(){
    this.tableroComponent.refresh(this.historicoWiner);
  }

}
