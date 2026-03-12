//script.js
console.log("console de script");

const ContenedorPrincipalId = document.getElementById("div_Principal");

function CrearContenedor(hero){
    return `<div class="MostrarInfo">
    <img src="${hero.images.lg}" alt="Personaje">
    <h2>${hero.name}</h2>

    <ul>
    <li>Fuerza: ${hero.powerstats.strength}</li>
    <li>Inteligencia: ${hero.powerstats.intelligence}</li> 
    <li>Durabilidad: ${hero.powerstats.durability}</li>
    <li>Poder: ${hero.powerstats.power}</li>
    <li>IQ combate: ${hero.powerstats.combat}</li>
    </ul>
</div>`
}

function MostrarHeroes(array){

    ContenedorPrincipalId.innerHTML = "";

    array.forEach(hero => {
        ContenedorPrincipalId.innerHTML += CrearContenedor(hero);
    });

}
//Para que se vean los personajer en eleccion.html

const ContenedorElegirlId = document.getElementById("div_Elegir");

function CrearContenedorElegirPersonaje(hero){
    return `<div class="MostrarInfo">
    <img src="${hero.images.lg}" alt="Personaje">
    <h2>${hero.name}</h2>

    <button id="${hero.id}">ELEGIR</button>
</div>`
}

function MostrarHeroesAElegir(array){
    ContenedorElegirlId.innerHTML = "";

    array.forEach(hero => {
        ContenedorElegirlId.innerHTML += CrearContenedorElegirPersonaje(hero);
    });
}

//Colocar imagenes de personaje elejido por el jugador

document.addEventListener("click", function(e){

    if(e.target.tagName === "BUTTON" && e.target.textContent === "ELEGIR"){

        const idHero = e.target.id;
        const player = localStorage.getItem("player");

        if(player === "1"){
            localStorage.setItem("player1Hero", idHero);
        }
        else if(player === "2"){
            localStorage.setItem("player2Hero", idHero);
        }

        // volver a la arena
        window.location.href = "arena.html";
    }

});

function MostrarHeroesArena(){

    const id1 = localStorage.getItem("player1Hero");
    const id2 = localStorage.getItem("player2Hero");

    if(id1){
        const hero1 = datahero.find(h => h.id == id1);
        document.getElementById("imgPlayer1").src = hero1.images.lg;
    }

    if(id2){
        const hero2 = datahero.find(h => h.id == id2);
        document.getElementById("imgPlayer2").src = hero2.images.lg;
    }

}

