import React from 'react';

function Car({ project }) {
    return (
        <div>
            <h3>{project.title}</h3>
            {
                project.img.map((img) => <img key={img.id.toString()} alt={img.alt} src={process.env.PUBLIC_URL + img.path}></img>)
            }
        </div>
    );
}

export default Car;