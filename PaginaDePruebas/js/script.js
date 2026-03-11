console.log("Desde script en PaginaDePruebas");

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