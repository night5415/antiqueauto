import React from "react";

function Person({ person }) {
  return (
    <div>
      <div className="person-card">
        <img
          className="basketball"
          alt={person.first}
          src={process.env.PUBLIC_URL + person.img}
        ></img>
        <p>
          <b>
            {person.first} {person.last}:{" "}
          </b>{" "}
          {person.bio}
        </p>
      </div>
      <br />
    </div>
  );
}

export default Person;
