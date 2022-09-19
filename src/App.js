import React, { useState } from "react";
import "./App.css";
import StatesMap from "./components/StatesMap";
import { GRAPH_COLORS } from "./constants/GRAPH_COLORS";
import { ALL_STATE_CODES } from "./constants/STATES";

function App() {
  const [statesColorConfig, setStatesColorConfig] = useState({});

  const randomizeData = () => {
    const RANDOM_COLOR_CONFIG = {};

    ALL_STATE_CODES.forEach((state) => {
      const randomColorIndex = Math.floor(Math.random() * 5);

      RANDOM_COLOR_CONFIG[state] = {
        fill: GRAPH_COLORS[randomColorIndex],
      };
    });

    setStatesColorConfig(RANDOM_COLOR_CONFIG);
  };

  return (
    <div className="App">
      <div className="input-map-container">
        <div style={{ flex: 0.6, textAlign: "center", padding: 24 }}>
          <button onClick={randomizeData}>Go Crazy!</button>
        </div>
        <div style={{ flex: 0.4 }}>
          <StatesMap {...{ statesColorConfig }} />
        </div>
      </div>
    </div>
  );
}

export default App;
