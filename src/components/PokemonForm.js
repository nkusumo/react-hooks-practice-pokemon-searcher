import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleSubmit}) {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonHp, setPokemonHp] = useState("");
  const [pokemonImageFront, setPokemonImageFront] = useState("");
  const [pokemonImageBack, setPokemonImageBack] = useState("");

  function handleName(e) {
    setPokemonName(e.target.value)
  }

  function handleHp(e) {
    setPokemonHp(e.target.value)
  }

  function handleImageFront(e) {
    setPokemonImageFront(e.target.value)
  }

  function handleImageBack(e) {
    setPokemonImageBack(e.target.value)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
          handleSubmit(pokemonName, pokemonHp, pokemonImageFront, pokemonImageBack)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={pokemonName} onChange={handleName} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={pokemonHp} onChange={handleHp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokemonImageFront}
            onChange={handleImageFront}
            />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokemonImageBack}
            onChange={handleImageBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
