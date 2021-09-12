class locoPreguntas {
  constructor() {
    this.puntosRonda = [10000, 20000, 30000, 40000, 50000];
    this.puntosAcumulado = 0;
    this.rondas = [];
  }

  configurarJuego() {
    this.configurarPregGeoInter();
    this.configurarPregGeoNal();
    this.configurarPregDeportes();
    this.configurarPregLiteratura();
    this.configurarPregTecnologia();
  }

  configurarPregGeoInter() {
    let respGeoInterPreg1 = new Respuestas([
      "Barcelona",
      "Sevilla",
      "Madrid",
      "Zaragoza",
    ]);
    let pregGeoInter1 = new Pregunta(
      "¿Cual ciudad es la capital de España?",
      respGeoInterPreg1,
      3
    );

    let respGeoInterPreg2 = new Respuestas([
      "Toronto",
      "Ottawa",
      "Vancouver",
      "Montreal",
    ]);
    let pregGeoInter2 = new Pregunta(
      "¿Cual ciudad es la capital de Canadá?",
      respGeoInterPreg2,
      2
    );

    let respGeoInterPreg3 = new Respuestas([
      "Cordoba",
      "Rosario",
      "Santa Fe",
      "Buenos Aires",
    ]);
    let pregGeoInter3 = new Pregunta(
      "¿Cual ciudad es la capital de Argentina?",
      respGeoInterPreg3,
      4
    );

    let respGeoInterPreg4 = new Respuestas([
      "Marsella",
      "Paris",
      "Toulouse",
      "Niza",
    ]);
    let pregGeoInter4 = new Pregunta(
      "¿Cual ciudad es la capital de Francia?",
      respGeoInterPreg4,
      2
    );

    let respGeoInterPreg5 = new Respuestas([
      "Sao Paulo",
      "Brasilia",
      "Rio de Janeiro",
      "Curitiba",
    ]);
    let pregGeoInter5 = new Pregunta(
      "¿Cual ciudad es la capital de Brasil?",
      respGeoInterPreg5,
      2
    );

    let preguntasGeoInter = [
      pregGeoInter1,
      pregGeoInter2,
      pregGeoInter3,
      pregGeoInter4,
      pregGeoInter5,
    ];

    this.rondas.push(new Ronda(preguntasGeoInter));
  }

  configurarPregGeoNal() {
    let respGeoNalPreg1 = new Respuestas([
      "Puerto Carreño",
      "Pueblo Rico",
      "Cumaribo",
      "Paujil",
    ]);
    let pregGeoNal1 = new Pregunta(
      "¿Cual es la capital del departamento Colombiano de  Vichada?",
      respGeoNalPreg1,
      1
    );

    let respGeoNalPreg2 = new Respuestas([
      "Florencia",
      "Yopal",
      "Villanueva",
      "Monterrey",
    ]);
    let pregGeoNal2 = new Pregunta(
      "¿Cual es la capital del departamento Colombiano de  Casanare?",
      respGeoNalPreg2,
      2
    );

    let respGeoNalPreg3 = new Respuestas([
      "Monteria",
      "Coveñas",
      "Sincelejo",
      "corozal",
    ]);
    let pregGeoNal3 = new Pregunta(
      "¿Cual es la capital del departamento Colombiano de  Sucre?",
      respGeoNalPreg3,
      3
    );

    let respGeoNalPreg4 = new Respuestas([
      "Valledupar",
      "Aguachica",
      "San Martin",
      "Sincelejo",
    ]);
    let pregGeoNal4 = new Pregunta(
      "¿Cual ciudad es la capital de Cesar?",
      respGeoNalPreg4,
      1
    );

    let respGeoNalPreg5 = new Respuestas([
      "Barranco Minas",
      "Puerto Colombia",
      "Yopal",
      "Inírida",
    ]);
    let pregGeoNal5 = new Pregunta(
      "¿Cual es la capital del departamento Colombiano de  Guainia?)",
      respGeoNalPreg5,
      4
    );

    let preguntasGeoNal = [
      pregGeoNal1,
      pregGeoNal2,
      pregGeoNal3,
      pregGeoNal4,
      pregGeoNal5,
    ];

    this.rondas.push(new Ronda(preguntasGeoNal));
  }

  configurarPregDeportes() {
    let respDeportesPreg1 = new Respuestas([
      "Francia",
      "Brasil",
      "Alemania",
      "Italia",
    ]);
    let pregDeportes1 = new Pregunta(
      "¿Cual equipo es el vigente campeón de la copa Mundial de Futbol de 2018?",
      respDeportesPreg1,
      1
    );

    let respDeportesPreg2 = new Respuestas([
      "Colombia",
      "Brasil",
      "Argentina",
      "Uruguay",
    ]);
    let pregDeportes2 = new Pregunta(
      "¿Cual equipo es el vigente campeón de la Copa America de 2021?",
      respDeportesPreg2,
      2
    );

    let respDeportesPreg3 = new Respuestas([
      "Inglaterra",
      "Alemania",
      "Francia",
      "Italia",
    ]);
    let pregDeportes3 = new Pregunta(
      "¿Cual equipo es el vigente campeón de la Eurocopa de 2021?",
      respDeportesPreg3,
      4
    );

    let respDeportesPreg4 = new Respuestas([
      "Deportes Tolima",
      "Millonarios",
      "Santa Fe",
      "Atlético Nacional",
    ]);
    let pregDeportes4 = new Pregunta(
      "¿Cual equipo es el vigente campeón de la Liga Betplay de 2021?",
      respDeportesPreg4,
      1
    );

    let respDeportesPreg5 = new Respuestas(["3", "2", "1", "4"]);
    let pregDeportes5 = new Pregunta(
      "¿Cuantas Copas Libertadores ha ganado Atlético Nacional?",
      respDeportesPreg5,
      2
    );

    let preguntasDeportes = [
      pregDeportes1,
      pregDeportes2,
      pregDeportes3,
      pregDeportes4,
      pregDeportes5,
    ];

    this.rondas.push(new Ronda(preguntasDeportes));
  }

  configurarPregLiteratura() {
    let respLiteraturasPreg1 = new Respuestas([
      "Mario Vargas Llosa",
      "Gabriel Garcia Márquez",
      "Octavio Paz",
      "Ernesto Sábato",
    ]);
    let pregLiteratura1 = new Pregunta(
      "¿Quien escribio el libro 'Doce Cuentos Peregrinos'?",
      respLiteraturasPreg1,
      2
    );

    let respLiteraturaPreg2 = new Respuestas([
      "Jane Austen",
      "Virginia Woolf",
      "J.K. Rowling",
      "Gabriela Mistral",
    ]);
    let pregLiteratura2 = new Pregunta(
      "¿Quien escribio el libro 'Orgullo y Prejuicio'?",
      respLiteraturaPreg2,
      1
    );

    let respLiteraturaPreg3 = new Respuestas([
      "William Shakespeare",
      "Jorge Luis Borges",
      "Julio Cortáza",
      "Oscar wilde",
    ]);
    let pregLiteratura3 = new Pregunta(
      "Quien escribio el libro 'El Retrato de Dorian Gray'?",
      respLiteraturaPreg3,
      4
    );

    let respLiteraturaPreg4 = new Respuestas([
      "Ernest Hemingway",
      "Fiodor Dostoyeuski",
      "Edgar Allan Poe",
      "Franz Kafka",
    ]);
    let pregLiteratura4 = new Pregunta(
      "¿Quien escribio el libro 'Crimen y Castigo'?",
      respLiteraturaPreg4,
      2
    );

    let respLiteraturaPreg5 = new Respuestas([
      "Carmen Posadas",
      "Gladys Potosí",
      "Rainbow Rowell",
      "Amelie Nothomb",
    ]);
    let pregLiteratura5 = new Pregunta(
      "¿Quien escribio el libro 'Fangirl'?",
      respLiteraturaPreg5,
      3
    );

    let preguntasLiteratura = [
      pregLiteratura1,
      pregLiteratura2,
      pregLiteratura3,
      pregLiteratura4,
      pregLiteratura5,
    ];

    this.rondas.push(new Ronda(preguntasLiteratura));
  }

  configurarPregTecnologia() {
    let respTecnologiaPreg1 = new Respuestas(["2007", "2006", "2008", "2009"]);
    let pregTecnologia1 = new Pregunta(
      "¿En que año Apple lanzó al mercado el Iiphon?",
      respTecnologiaPreg1,
      1
    );

    let respTecnologiaPreg2 = new Respuestas(["2000", "2003", "2002", "2005"]);
    let pregTecnologia2 = new Pregunta(
      "¿En que año Elon Musk fundó SpaceX?",
      respTecnologiaPreg2,
      3
    );

    let respTecnologiaPreg3 = new Respuestas(["1996", "1994", "1993", "1997"]);
    let pregTecnologia3 = new Pregunta(
      "En que año Jeff Bezos fundó Amazon?",
      respTecnologiaPreg3,
      2
    );

    let respTecnologiaPreg4 = new Respuestas([
      "Marc Andreessen y James H. Clark",
      "Evan Williams y Jack Dorseyi",
      "Biz Stone y Noah Glass",
      "Larry Page y Serguéi Brin",
    ]);
    let pregTecnologia4 = new Pregunta(
      "¿Quienes fueron los fundadores de Google?",
      respTecnologiaPreg4,
      4
    );

    let respTecnologiaPreg5 = new Respuestas(["C#", "Java", "C++", "C"]);
    let pregTecnologia5 = new Pregunta(
      "¿En que lenguaje de programación se desarrolló el videojuego 'Minecraft'?",
      respTecnologiaPreg5,
      2
    );

    let preguntasTecnologia = [
      pregTecnologia1,
      pregTecnologia2,
      pregTecnologia3,
      pregTecnologia4,
      pregTecnologia5,
    ];

    this.rondas.push(new Ronda(preguntasTecnologia));
  }

  inicioJuego() {
    let preguntaSeleccionada = 0;
    let respuestaSeleccionada = 0;
    let esCorrecto = false;
    let sigue = false;
    let victoria = true;
    for (let i = 0; i < this.rondas.length; i++) {
      console.log(`\nRonda ${i + 1}`);
      preguntaSeleccionada = this.random();
      this.mostrarPregunta(i, preguntaSeleccionada);
      sigue = this.quiereContinuar();
      if (sigue) {
        respuestaSeleccionada = this.pedirRespuesta();
        esCorrecto = this.validarRespuesta(
          i,
          preguntaSeleccionada,
          respuestaSeleccionada
        );
        if (esCorrecto) {
          this.adicionarPuntos(i);
        } else {
          alert("Lo sentimos, la  respuesta es incorrecta, FIN DEL JUEGO :(");
          victoria = false;
          break;
        }
      } else {
        alert(
          `FIN DEL JUEGO, el jugador se retira con ${this.puntosAcumulado} puntos acumulados.`
        );
        victoria = false;
        break;
      }
    }
    if (victoria) {
      alert(
        `FIN DEL JUEGO, HAS GANADO CON UN PUNTAJE DE ${this.puntosAcumulado} PUNTOS!!!`
      );
    }
  }

  mostrarPregunta(i, preguntaSeleccionada) {
    console.log("");
    console.log(this.rondas[i].preguntas[preguntaSeleccionada].pregunta);
    console.log("");
    let resp =
      this.rondas[i].preguntas[preguntaSeleccionada].respuestas.respuesta;
    for (let j = 0; j < resp.length; j++) {
      console.log(`${j + 1}. ${resp[j]}`);
    }
  }

  random() {
    return Math.floor(Math.random() * (5 - 1) + 1);
  }

  pedirRespuesta() {
    let esCorrecto = false;
    let respuesta = 0;
    while (!esCorrecto) {
      respuesta = Number(
        prompt("Escribe una de las posibles opciones (1,2,3 o 4)")
      );
      switch (respuesta) {
        case 1:
          esCorrecto = true;
          break;
        case 2:
          esCorrecto = true;
          break;
        case 3:
          esCorrecto = true;
          break;
        case 4:
          esCorrecto = true;
          break;
        default:
          alert(
            "La respuesta seleccionada no está dentro de las posibles opciones"
          );
          break;
      }
    }
    return respuesta;
  }

  validarRespuesta(i, preguntaSeleccionada, respuestaSeleccionada) {
    let esCorrecto = false;
    if (
      this.rondas[i].preguntas[preguntaSeleccionada].respuestaCorrecta ===
      respuestaSeleccionada
    ) {
      esCorrecto = true;
    }
    return esCorrecto;
  }

  adicionarPuntos(i) {
    this.puntosAcumulado = this.puntosAcumulado + this.puntosRonda[i];
    alert(`Tiene Acumulado ${this.puntosAcumulado} puntos`);
  }

  quiereContinuar() {
    let sigue = false;
    let respuesta = "";
    respuesta = prompt(
      "Desea continuar o quiere retirarse (responda con SI o NO)"
    );
    if (respuesta === "SI") {
      sigue = true;
      return sigue;
    }
    return sigue;
  }
}

class Ronda {
  constructor(preguntas) {
    this.preguntas = preguntas;
  }
}

class Pregunta {
  constructor(pregunta, respuestas, respuestaCorrecta) {
    this.pregunta = pregunta;
    this.respuestas = respuestas;
    this.respuestaCorrecta = respuestaCorrecta;
  }
}

class Respuestas {
  constructor(respuesta) {
    this.respuesta = respuesta;
  }
}

let juego = new locoPreguntas();
juego.configurarJuego();
juego.inicioJuego();
