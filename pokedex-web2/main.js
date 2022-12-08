import axios from "axios";

//Fetches all pokemon from the poke api
async function fetchAllPokemon(){
  try {
    const allPokemonData = await axios.get("https://pokeapi.co/api/v2/pokemon");

    if(allPokemonData.status == 200){
      return allPokemonData.data
    } else {
      return null;
    }
  } catch(error){
    console.log("Oh no, we are in a pickle!");
    console.log(error);
  }
}

//Fetches one pokemon based on its name from the poke api
async function fetchPokemon(name){
  try {
    const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if(pokemonData.status == 200){
      return pokemonData.data;
    } else {
      return null
    }
  } catch(error){
    console.log(error);
  }
}

// fetchAllPokemon();
async function displayPokemon(){
  const pokemonData = await fetchAllPokemon();

  const pokemonContainer = document.getElementById("pokemonContainer");

  const pokemonInfo = document.getElementById("pokemonInfo");

  const pokemonList = document.createElement("ul");

  console.log(pokemonData.results); //Array of objects

  for (let i = 0; i < pokemonData.results.length; i++) {
    const pokemon = pokemonData.results[i]; // an object
    //{ name: string, url: string}

    const pokemonListItem = document.createElement("li")

    const pokemonButton = document.createElement("button");

    pokemonButton.innerText = pokemon.name;

    pokemonButton.addEventListener("click", async function(){
      const currentPokemon = await fetchPokemon(pokemon.name);
      console.log(currentPokemon); //object -> sprites prop -> front_default

      const pokemonImg = document.createElement("img");
      pokemonImg.src = currentPokemon.sprites.front_default;

      pokemonInfo.append(pokemonImg);

      console.log(pokemon.name);
    })

    pokemonListItem.append(pokemonButton);

    pokemonList.append(pokemonListItem);
  }

  pokemonContainer.append(pokemonList);
}

displayPokemon();
