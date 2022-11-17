export class Joke {
  private static idCont: number = 0;
  private id: Number;
  private oculto: Boolean;

  constructor(private pregunta: String, private respuesta: String) {
    this.oculto = true;
    this.id = Joke.incrementId();
  }

  private static incrementId(): Number {
    Joke.idCont++;
    return Joke.idCont;
  }

  getId(): Number {
    return this.id;
  }

  getPregunta(): String {
    return this.pregunta;
  }

  getRespuesta(): String {
    return this.respuesta;
  }

  isOculto(): Boolean {
    return this.oculto;
  }

  setOculto(value: Boolean) {
    this.oculto = value;
  }

  cambiarOculto(joke: Joke) {
    joke.setOculto(!joke.isOculto());
  }
}
