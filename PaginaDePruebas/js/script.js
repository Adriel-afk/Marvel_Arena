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

//ARENA FAKE

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