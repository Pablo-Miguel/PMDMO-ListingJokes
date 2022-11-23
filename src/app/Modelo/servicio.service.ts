import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private jokes: Joke[];
  private jokes$: BehaviorSubject<Joke[]>;

  constructor() {
    this.jokes = [
      new Joke(
        '¿Qué dijo el queso cuando se miró en el espejo?',
        'Hola-Yo (Halloumi)'
      ),
      new Joke(
        '¿Qué tipo de queso usas para disfrazar un caballo pequeño?',
        'Máscara-a-pony (Mascarpone)'
      ),
      new Joke(
        'Un niño me lanzó un trozo de queso cheddar.',
        "Pensé 'Eso no es muy maduro'"
      )
    ];

    this.jokes$ = new BehaviorSubject<Joke[]>(this.jokes);
  }

  getArray(): Joke[] {
    return [...this.jokes];
  }

  getArray$(): Observable<Joke[]> {
    return this.jokes$.asObservable();
  }

  anyadirJokePrimero(joke: Joke) {
    this.jokes.unshift(joke);
    this.jokes$.next([...this.jokes]);
  }

  eliminarBroma(joke: Joke) {
    this.jokes = this.jokes.filter((x) => x.getId() !== joke.getId());
    this.jokes$.next([...this.jokes]);
  }
}
