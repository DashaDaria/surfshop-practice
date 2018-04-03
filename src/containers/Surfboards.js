import React from 'react';
import './Surfboards.css'

const Surfboards = ({surfboards}) => (
  <div className="SurfboardsContainer">
    <h1> Surfboards: </h1>

    {surfboards.map(surfboard =>
      <div key={surfboard.id} className="Surfboardcard">
        <h3>{surfboard.name}</h3>
        <p>Price: ${surfboard.price}</p>
        <img className="SurfboardImage" src={surfboard.img_url} alt={surfboard.name}/>
        <p>Length: {surfboard.length} inches</p>
      </div>
    )}

  </div>
)

export default Surfboards;
