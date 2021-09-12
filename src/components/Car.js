import React from "react";

function Car({ project }) {
  const { images = [] } = project,
    onError = (e) => {
      const { target } = e,
        parent = target.parentElement;

      if (Boolean(parent)) {
        parent.removeChild(target);
        console.error("We had an image not load");
      }
    };

  return (
    <div>
      <h3>{project.title}</h3>
      {images.map((image) => (
        <img
          onError={onError}
          key={image.id}
          alt={image.alt}
          src={`${process.env.PUBLIC_URL}${image.path}`}
        ></img>
      ))}
    </div>
  );
}

export default Car;
