import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from 'src/app/Modelo/joke';
import { ServicioService } from 'src/app/Modelo/servicio.service';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  @Input() joke!: Joke;

  constructor(public servicio: ServicioService){

  }
  
  eliminarBroma(joke: Joke) {
    this.servicio.eliminarBroma(joke)
  }

}
