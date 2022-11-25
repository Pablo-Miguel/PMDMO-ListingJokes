import { Component } from '@angular/core';
import { Joke } from 'src/app/Modelo/joke';
import { ServicioService } from 'src/app/Modelo/servicio.service';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  jokes$!: Joke[];

  constructor(public servicio: ServicioService){
    this.servicio.getArray$().subscribe( j => this.jokes$ = j );
  }

}
