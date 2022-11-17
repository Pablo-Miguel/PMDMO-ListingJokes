import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-joke',
  templateUrl: './modal-joke.component.html',
  styleUrls: ['./modal-joke.component.css']
})
export class ModalJokeComponent {

  constructor(public modalActivo: NgbActiveModal) {}

}
 