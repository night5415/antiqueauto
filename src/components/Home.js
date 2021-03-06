import React from 'react';

function Home() {
  return (
    <div className="home">
      <video loop autoPlay>
        <source src="video/vintage.mp4" type="video/mp4" />
      </video>
      <div className="phone"><a href="tel:8166251651">(816) 625-1651</a></div>
      <div className="phone"><a href="mailto:antiqueautoworks@gmail.com">antiqueautoworks@gmail.com</a></div>
    </div>
  );
}

export default Home; 