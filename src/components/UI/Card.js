import React from 'react';

const Card = (props) => {
  return <div className="border-4 mt-4 flex justify-center ">{props.children}</div>;
};

export default Card;
