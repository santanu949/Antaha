import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Footer from "@/components/Footer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  useEffect(() => {
    const ping = async () => {
      try {
        await axios.get(`${API}/`);
      } catch (e) {
        // no-op
      }
    };
    ping();
  }, []);

  return (
    <div data-testid="home-page" className="min-h-screen bg-white">
      {/* Spacer so the footer reveal animation has room to play */}
      <section
        data-testid="scroll-spacer"
        className="flex h-[60vh] items-end justify-center pb-10"
      >
        <p className="text-[12px] font-medium tracking-[0.32em] text-neutral-400">
          SCROLL DOWN
        </p>
      </section>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;