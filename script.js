function elegirJugador1(personaje){

localStorage.setItem("jugador1", personaje)

window.location.href = "Eleccion2.html"

}

window.onload = function(){

let jugador1 = localStorage.getItem("jugador1")

let espacio = document.getElementById("jugador1")

if(espacio && jugador1){
    espacio.innerHTML = jugador1
}

if(jugador1 === "Spider-man"){

let carta = document.querySelector(".spider-man-eleccion2")

if(carta){

let boton = carta.querySelector("button")

boton.disabled = true
boton.innerText = "ELEGIDO"

}

}

}