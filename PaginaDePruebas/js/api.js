//api.js
const url = "https://akabab.github.io/superhero-api/api/all.json";

let marvelPublishers = [
        "Marvel Comics",
        "Ant-Man",
        "Captain America",
        "Deadpool",
        "Evil Deadpool",
        "Giant-Man",
        "Power Man",
        "She-Hulk",
        "Goliath",
        "Rune King Thor"
    ];
let marvelNombre = [
    "Spider-Man",
    "Iron Man",
    "Hulk",
    "Deadpool",
    "Captain America",
    "Thor",
    "Daredevil",
    "Punisher",
    "Black Panther",
    "Ant-Man",
    "Mister Fantastic",
    "Doctor Strange",
    "Vision",
    "Scarlet Witch",
    "Venom",
    "Cyclops",
    "Ghost Rider",
    "Silver Surfer",
    "Beyonder",
    "Wolverine"
];

let datahero = [];

fetch(url).then(response => {
    if(!response.ok){
        throw new Error("Error en conexion con API")
    }
    return response.json();
})
.then(data => {
    console.log("Conexion a API buena");

    datahero = data;

    if(document.getElementById("div_Principal")){
        GetPersonajes(datahero);
    }

    if(document.getElementById("div_Elegir")){
        GetPersonajesElegir(datahero);
    }

})
.catch(error => {
        console.error("Hubo un problema:", error);
});


function GetMarvel(array){

    // Filtrar solo por personajer de MARVEL

    const filtrar_por_marvel = array.filter(hero =>
        marvelPublishers.includes(hero.biography.publisher) 
    );

    console.log(filtrar_por_marvel);
    MostrarHeroes(filtrar_por_marvel);
}

function GetPersonajes(array){

    // Filtrar solo por personajer

    const filtrar_por_personajes = array.filter(hero =>
        marvelNombre.includes(hero.name)
    );

    MostrarHeroes(filtrar_por_personajes);
}

function GetPersonajesElegir(array){

    // Filtrar solo por personajer

    const filtrar_por_personajes = array.filter(hero =>
        marvelNombre.includes(hero.name)
    );

    MostrarHeroesAElegir(filtrar_por_personajes);
}