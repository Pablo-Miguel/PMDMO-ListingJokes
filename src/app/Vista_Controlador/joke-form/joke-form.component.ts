import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Joke } from 'src/app/Modelo/joke';
import { ServicioService } from 'src/app/Modelo/servicio.service';
import { ModalJokeComponent } from '../modal-joke/modal-joke.component';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  @Output() joke: EventEmitter<Joke> = new EventEmitter<Joke>();

  frmJokes!: FormGroup;
  pregunta!: FormControl;
  respuesta!: FormControl;

  constructor(private servicioModal: NgbModal, public servicio: ServicioService) {
  }
  
  ngOnInit(): void {

    this.instanciaVarForm();

    this.frmJokes = new FormGroup({
      pregunta: this.pregunta,
      respuesta: this.respuesta
    });
  }

  instanciaVarForm(){
    this.pregunta = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.respuesta = new FormControl('', [Validators.required, Validators.minLength(6)]);
  }

  crearJoke() {
    if (this.pregunta.value !== '' && this.respuesta.value !== '') {
      this.servicio.anyadirJokePrimero(new Joke(this.pregunta.value, this.respuesta.value));
    }
    else {
      this.servicioModal.open(ModalJokeComponent);
    }
    this.frmJokes.reset();
  }

  pulsaTecla($event: KeyboardEvent) {
    if($event.key === "Enter" && !this.frmJokes.invalid){
      this.crearJoke();
    }
  }

}
