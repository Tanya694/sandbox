import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <h2>Our Tours</h2>
      {tours.map((item) => {
        return <Tour key={item.id} {...item} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;
