import React from 'react';

function Story({story}) {
    return (
      <div className="story">
        {
          story.map((x) => <p key={x.id.toString()}>
            {x.body}
          </p>)
        }
      </div>
    );
  }

export default Story;