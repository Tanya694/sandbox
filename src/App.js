import "./styles.css";
import Loading from "./Loading";
import React, { useState } from "react";
import Tours from "./Tours";
import Data from "./Data";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState(Data);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button onClick={() => setTours(Data)}>Refresh</button>
      </main>
    );
  }

  return (
    <div className="App">
      {loading ? <Loading /> : <Tours tours={tours} removeTour={removeTour} />}
    </div>
  );
}
