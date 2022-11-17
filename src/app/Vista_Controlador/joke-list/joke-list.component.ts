import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/Modelo/servicio.service';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  constructor(public servicio: ServicioService){
    
  }

}
