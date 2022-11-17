import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeFormComponent } from './Vista_Controlador/joke-form/joke-form.component';
import { JokeComponent } from './Vista_Controlador/joke/joke.component';
import { CensurarInsultosPipe } from './Pipe/censurar-insultos.pipe';
import { ModalJokeComponent } from './Vista_Controlador/modal-joke/modal-joke.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { JokeListComponent } from './Vista_Controlador/joke-list/joke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeFormComponent,
    JokeComponent,
    CensurarInsultosPipe,
    ModalJokeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
