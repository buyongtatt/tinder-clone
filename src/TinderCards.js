import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Yui Hatano",
      url:
        "https://i.pinimg.com/280x280_RS/66/23/8e/66238e10f271b7258706e6f4b41a8f83.jpg",
    },
    {
      name: "Rina Kato",
      url: "https://i.ytimg.com/vi/sORhZNCmHS0/maxresdefault.jpg",
    },
  ]);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
