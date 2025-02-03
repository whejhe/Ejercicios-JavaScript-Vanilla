let jugadores = [];
const palos = ["bastos", "oro", "espadas", "copas"];
let baraja = [];
let partida = false;

function crearBaraja() {
    console.log("Creando baraja");
    for (const palo of palos) {
        for (let i = 1; i <= 7; i++) {
            baraja.push(`${i} de ${palo}`);
        }
        baraja.push(`sota de ${palo}`);
        baraja.push(`caballo de ${palo}`);
        baraja.push(`rey de ${palo}`);
    }
}

function barajar(array) {
    console.log("Barajando");
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function nuevaPartida() {
    jugadores = [];
    const deseaJugar = confirm("¿Desea jugar una nueva partida?");
    if (!deseaJugar) {
        alert("Gracias por la visita. ¡Hasta la próxima!");
        return;
    }

    const numJugadoresStr = prompt("¿Cuántos jugadores?");
    const numJugadores = parseInt(numJugadoresStr);

    if (isNaN(numJugadores) || numJugadores < 1 || numJugadores > 4) {
        alert("Debes seleccionar entre 1 y 4 jugadores");
        nuevaPartida(); // Volvemos a preguntar
        return;
    }
    for (let i = 0; i < numJugadores; i++) {
        const nombre = prompt(`Nombre del jugador ${i + 1}`);
        jugadores.push(nombre);
    }
    console.log("Jugadores: " + jugadores);
    crearBaraja();
    barajar(baraja);
    partida = true;
}

function darCarta(jugador) {
    if (baraja.length === 0) {
        console.log("No hay cartas en la baraja");
        return;
    }
    const carta = baraja.pop();
    console.log(`${jugador} recibe la carta ${carta}`);
    return carta;
}

function calcularValorCarta(carta) {
    const valorCarta = parseInt(carta.split(" de ")[0]);
    return isNaN(valorCarta) ? 0.5: valorCarta; //Si no es un numero, devuelve 0.5
}

function calculaPuntuacion(mano) {
    let puntuacion = 0;
    for (const carta of mano) {
        const valor = calcularValorCarta(carta);
        if (valor === 1) {
            puntuacion += 1;
        } else if (valor === 2) {
            puntuacion += 2;
        }else if (valor === 3) {
            puntuacion += 3;
        }else if (valor === 4) {
            puntuacion += 4;
        }else if (valor === 5) {
            puntuacion += 5;
        }else if (valor === 6) {
            puntuacion += 6;
        }else if (valor === 7) {
            puntuacion += 7;
        }else{
            puntuacion += 0.5;
        }
    }
    return puntuacion;
}

function finDeJuego() {
    console.log("Fin del juego");
    partida = false;
}


/*-----------------------------------------------------------------------------*/

function jugar() {
    nuevaPartida();

    const jugadoresPlantados = [];
    const resultados = {};

    for (const jugador of jugadores) {
        const mano = [darCarta(jugador)];
        console.log(`${jugador} tiene las cartas: ${mano.join(", ")}`);

        let puntuacion = calculaPuntuacion(mano);

        while (puntuacion < 7.5) {
            const deseaCarta = confirm(`${jugador}, ¿deseas otra carta?`);
            if (deseaCarta && puntuacion<7.5) {
                const nuevaCarta = darCarta(jugador);
                mano.push(nuevaCarta);
                console.log(`${jugador} tiene las cartas: ${mano.join(", ")}`);
                puntuacion = calculaPuntuacion(mano);
                if(puntuacion >= 7.5){
                    console.log(`${jugador} se ha pasado de 7.5 puntos.`);
                    break;//detiene el turno actual
                }
            } else {
                jugadoresPlantados.push(jugador);
                if(puntuacion > 7.5){
                    console.log(`${jugador} se ha pasado de 7.5 puntos.`);
                }else{
                    console.log(`${jugador} se planta.`);
                }
                break;
            }
        }

        if (puntuacion === 7.5) {
            console.log(`${jugador} ha conseguido 7.5 puntos.`);
        } else if (puntuacion > 7.5) {
            console.log(`${jugador} se ha pasado de 7.5 puntos.`);
        }

        resultados[jugador] = puntuacion;
    }

    // Turno del Crupier
    const crupierMano = [darCarta("Crupier")];
    console.log(`Crupier tiene las cartas: ${crupierMano.join(", ")}`);
    let puntuacionCrupier = calculaPuntuacion(crupierMano);

    while (puntuacionCrupier < 5.5) {
        const nuevaCartaCrupier = darCarta("Crupier");
        crupierMano.push(nuevaCartaCrupier);
        console.log(`Crupier tiene las cartas: ${crupierMano.join(", ")}`);
        puntuacionCrupier = calculaPuntuacion(crupierMano);
    }

    if (puntuacionCrupier === 7.5) {
        console.log(`Crupier ha conseguido 7.5 puntos.`);
    } else if (puntuacionCrupier > 7.5) {
        console.log(`Crupier se ha pasado de 7.5 puntos.`);
    }

    console.log("Resultados:");
    for (const jugador of jugadores) {
        if (resultados[jugador] > 7.5) {
            console.log(`${jugador} se a pasado del 7.5`);
        }else if(puntuacionCrupier > resultados[jugador] && resultados[jugador]<7.5){
            console.log(`${jugador} pierde contra el Crupier`);
        }else if (resultados[jugador] > puntuacionCrupier && resultados[jugador]<=7.5) {
            console.log(`${jugador} gana contra el Crupier.`);
        } else if (resultados[jugador] < puntuacionCrupier && puntuacionCrupier<=7.5) {
            console.log(`${jugador} pierde contra el Crupier.`);
        } else {
            console.log(`${jugador} empata con el Crupier.`);
        }
    }

}


finDeJuego();
