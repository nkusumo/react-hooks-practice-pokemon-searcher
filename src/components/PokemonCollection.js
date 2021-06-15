import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList, search}) {
  
  const displayArray = pokeList.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  const pokeArray = displayArray.map(pokemon => <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites} />)
  
  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {pokeArray}
    </Card.Group>
  );
}

export default PokemonCollection;
