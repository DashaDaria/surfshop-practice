import React, {Component} from 'react';

const Surfboards = ({surfboards}) => (
  <div>
    <h1> Surfboards: </h1>
    <div>
    {surfboards.map(surfboard =>
      <h3>{surfboard.name}</p>
      <p>{surfboard.price}</p>
      <p>{surfboard.img_url}</p>
      <p>{surfboard.length}</p>
    )}
    </div>
  </div>
)

export default Surfboards;
