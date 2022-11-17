import { Injectable } from '@angular/core';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  jokes: Joke[];

  constructor() {
    this.jokes = [];
    this.anyadirJokePrimero(
      new Joke(
        '¿Qué dijo el queso cuando se miró en el espejo?',
        'Hola-Yo (Halloumi)'
      )
    );
    this.anyadirJokePrimero(
      new Joke(
        '¿Qué tipo de queso usas para disfrazar un caballo pequeño?',
        'Máscara-a-pony (Mascarpone)'
      )
    );
    this.anyadirJokePrimero(
      new Joke(
        'Un niño me lanzó un trozo de queso cheddar.',
        "Pensé 'Eso no es muy maduro'"
      )
    );
  }

  getArray(): Joke[] {
    return this.jokes;
  }

  anyadirJokePrimero(joke: Joke) {
    this.getArray().unshift(joke);
  }

  eliminarBroma(joke: Joke) {
    this.jokes = this.getArray().filter((x) => x.getId() !== joke.getId());
  }
}
