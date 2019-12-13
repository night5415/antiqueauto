import React from 'react';
import Person from './Person';

function Crew({employees}) {
    return (
      <div>
        {
          employees.map((person) => <Person key={person.id.toString()} person={person} />)
        }
      </div>
    );
  }

export default Crew;