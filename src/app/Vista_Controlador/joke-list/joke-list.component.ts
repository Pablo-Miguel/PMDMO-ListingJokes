import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/Modelo/joke';
import { ServicioService } from 'src/app/Modelo/servicio.service';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes$!: Joke[];

  constructor(public servicio: ServicioService){
    
  }

  ngOnInit(): void {
    this.servicio.getArray$().subscribe( j => this.jokes$ = j );
  }

}
