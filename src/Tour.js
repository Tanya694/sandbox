import React, { useState } from "react";

const Tour = ({ id, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article>
      <div>
        <h3>{name}</h3>
        <h5>{price}</h5>
      </div>
      <p>{readMore ? info : `${info.substring(0, 50)}...`}</p>
      <button onClick={() => setReadMore(!readMore)}>
        {readMore ? "Showless" : "ReadMore"}
      </button>
      <button onClick={() => removeTour(id)}>Not intrested</button>
    </article>
  );
};

export default Tour;
