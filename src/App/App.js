import React from "react";
import { BubbleLayout } from "../layouts/BubbleLayout";
import { NightLayout } from "../layouts/NightLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/landings" element={<BubbleLayout />} />
          <Route path="/night" element={<NightLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
