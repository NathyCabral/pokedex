const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    fetchPokemonData(searchTerm);
});

// Função para buscar um Pokémon
function fetchPokemonData(pokemonName) {
    const url = `${apiUrl}${pokemonName}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro na requisição");
            }
            return response.json();
        })
        .then((data) => {
           
            generateCard(data);

            generateCard(data);
            searchInput.value = ""; 
        })
        .catch((error) => {
            console.error("Ocorreu um erro:", error);
        });
}

// Função para gerar um card de Pokémon
function generateCard(data) {
    
    const hp = data.stats.find((stat) => stat.stat.name === "hp").base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats.find((stat) => stat.stat.name === "attack").base_stat;
    const statDefense = data.stats.find((stat) => stat.stat.name === "defense").base_stat;
    const statSpeed = data.stats.find((stat) => stat.stat.name === "speed").base_stat;

    // Configurar o estilo do card com base no tipo de Pokémon
    const themeColor = typeColor[data.types[0].type.name];

    card.innerHTML = `
        <p class="hp">
            <span>HP</span>
            ${hp}
        </p>
        <img src="${imgSrc}" />
        <h2 class="poke-name">${pokeName}</h2>
        <div class="types"></div>
        <div class="stats">
            <div>
                <h3>${statAttack}</h3>
                <p>Ataque</p>
            </div>
            <div>
                <h3>${statDefense}</h3>
                <p>Defesa</p>
            </div>
            <div>
                <h3>${statSpeed}</h3>
                <p>Velocidade</p>
            </div>
        </div>
    `;

    appendTypes(data.types);
    setCardStyle(themeColor);
}

// Função para definir o estilo do card com base no tipo do Pokémon
function setCardStyle(themeColor) {
    card.style.background = themeColor;
    card.style.color = "#fff"; 
}

function appendTypes(types) {
    const typesContainer = document.querySelector(".types");
    types.forEach((type) => {
        const span = document.createElement("SPAN");
        span.textContent = type.type.name;
        span.style.backgroundColor = typeColor[type.type.name];
        typesContainer.appendChild(span);
    });
}



searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const searchTerm = searchInput.value.toLowerCase();
        fetchPokemonData(searchTerm);
    }
});


// Inicialmente, exiba um Pokémon aleatório
fetchPokemonData("ditto");
