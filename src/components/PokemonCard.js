import React,{ useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {

  const [sprite, setSprite] = useState(sprites.front)

  function handleClick() {
    if (sprite === sprites.front) {
      setSprite(sprites.back)
    } else {
      setSprite(sprites.front)
    }
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={sprite} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
