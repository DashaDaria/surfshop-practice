import React, {Component} from 'react';

const Surfboards = ({surfboards}) => (
  <div>
    <h1> Surfboards: </h1>

    {surfboards.map(surfboard =>
      <div>
        <h3>{surfboard.name}</h3>
        <p>Price: ${surfboard.price}</p>
        <img src={surfboard.img_url} alt={surfboard.name}/>
        <p>Length: {surfboard.length} inches</p>
      </div>
    )}

  </div>
)

export default Surfboards;
