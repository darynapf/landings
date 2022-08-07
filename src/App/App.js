import React from "react";
import { MainScreen } from "../screens/MainScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/landings" element={<MainScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
