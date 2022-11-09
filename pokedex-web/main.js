import './style.css'
import axios from "axios";

const fetchPokemon = async (name) => {
  const results = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (results.status == 200) {
    return results.data;
  } else {
    return {};
  }
}

const fetchAllPokemon = async (params) => {
  const results = await axios.get(`https://pokeapi.co/api/v2/pokemon?${params}`);
  if (results.status == 200) {
    return results.data;
  } else {
    return {};
  }
}

const displayPokemon = async (params) => {

  const pokemonData = await fetchAllPokemon(params);
  let pokemonInfoContainer = document.getElementById("pokemonInfo");

  const pokemonContainer = document.getElementById("pokemonContainer");
  const listElement = document.createElement("ul");

  pokemonContainer.append(listElement);

  for (let i = 0; i < pokemonData.results.length; i++) {
    const pokemon = pokemonData.results[i];
    const pokemonElement = document.createElement("li");
    const pokemonButton = document.createElement("button");

    pokemonButton.innerText = pokemon.name;

    pokemonButton.addEventListener("click", async () => {
      pokemonInfoContainer.innerText = pokemon.name
      const fetchedPokemon = await fetchPokemon(pokemon.name);

      const pokemonImage = document.createElement("img");

      pokemonImage.src = fetchedPokemon.sprites.front_default;

      pokemonInfoContainer.append(pokemonImage);
    })

    pokemonElement.append(pokemonButton);

    listElement.append(pokemonElement);
  }

  if (pokemonData.next) {
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.addEventListener("click", async function() {
      const nextParams = pokemonData.next.split("?")[1];
      pokemonContainer.innerHTML = "";
      pokemonInfoContainer.innerHTML = "";
      await displayPokemon(nextParams);
    })
    pokemonContainer.append(nextButton)
  }

  if (pokemonData.previous) {
    const prevButton = document.createElement("button");
    prevButton.innerText = "previous";
    prevButton.addEventListener("click", async function() {
      const prevParams = pokemonData.previous.split("?")[1];
      pokemonContainer.innerHTML = "";
      pokemonInfoContainer.innerHTML = "";
      await displayPokemon(prevParams);
    })
    pokemonContainer.append(prevButton)
  }
}

(async () => {
  await displayPokemon();
})()
