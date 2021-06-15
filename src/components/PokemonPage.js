import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeList, setPokeList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(data => setPokeList(data))
  }, [])

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleSubmit(name, hp, imageFront, imageBack) {
    let newPokemon = {name: name, hp: hp, sprites: {front: imageFront, back: imageBack}}
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(data => {
      let updatedList = [...pokeList, data]
      setPokeList(updatedList)
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit} />
      <br />
      <Search search={search} handleSearch={handleSearch} />
      <br />
      <PokemonCollection pokeList={pokeList} search={search} />
    </Container>
  );
}

export default PokemonPage;
