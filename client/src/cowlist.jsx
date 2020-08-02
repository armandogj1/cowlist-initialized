import React from 'react';
import Cow from './cow.jsx';

const Cowlist = ({cows, handleDescription}) => {
  return (
    <div>
      <p>HELLO COWS</p>
      {
        cows.map(cow => (
          <Cow name={cow.name} description={cow.description} handleDescription={handleDescription}/>
        ))
      }
    </div>
  );
};

export default Cowlist;