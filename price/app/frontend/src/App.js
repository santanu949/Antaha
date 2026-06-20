import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./components/PricingPage";
import { DemoVariant1 } from "./components/demo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PricingPage />} />
          <Route path="/demo" element={<DemoVariant1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
