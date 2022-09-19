import React, { useState } from "react";
import "./App.css";
import BarGraph from "./components/BarGraph";
import StatesMap from "./components/StatesMap";
import { GRAPH_COLORS } from "./constants/GRAPH_COLORS";
import { ALL_STATE_CODES } from "./constants/STATES";
import { GRAPH_DATA } from "./constants/GRAPH_DATA";

function App() {
  const [statesColorConfig, setStatesColorConfig] = useState({});
  const [graphData, setGraphData] = useState(GRAPH_DATA);

  const randomizeData = () => {
    // Randomize colors
    const RANDOM_COLOR_CONFIG = {};

    ALL_STATE_CODES.forEach((state) => {
      const randomColorIndex = Math.floor(Math.random() * 5);

      RANDOM_COLOR_CONFIG[state] = {
        fill: GRAPH_COLORS[randomColorIndex],
      };
    });

    setStatesColorConfig(RANDOM_COLOR_CONFIG);

    // Randomize graph
    const currentGraphData = [...graphData];

    const newGraphData = currentGraphData.map((metric) => {
      const randomMetric = {};
      Object.keys(metric).forEach((property) => {
        if (property !== "name") {
          randomMetric[property] = Math.floor(Math.random() * 10000);
        }
      });
      randomMetric.name = metric.name;

      return randomMetric;
    });

    setGraphData(newGraphData);
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
      <BarGraph data={graphData} />
    </div>
  );
}

export default App;
