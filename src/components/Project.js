import React from 'react';
import Car from './Car';

function Project({ projects }) {
    return (
        <div className="project">
            {
                projects.map((project) => <Car key={project.id.toString()} project={project} />)
            } 
        </div>
    );
}

export default Project;