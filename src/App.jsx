import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Visualiser from "./pages/Visualiser.jsx";
import Algorithms from "./pages/Algorithms.jsx";
import Kmp from "./pages/Kmp.jsx";
import RabinKarp from "./pages/RabinKarp.jsx";
import ZAlgorithm from "./pages/ZAlgorithm.jsx";
import Nav from "./components/Nav.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <div className="w-full bg-background">
          <div className="w-full px-6 py-6 relative">
            {/* Logo */}
            {/* <Link
              to="/"
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 pointer-events-auto"
            >
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            </Link> */}

            {/* Main Title */}
            <h1 className="pointer-events-none text-3xl sm:text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-xl animate-text-shimmer pb-3">
              String Matching Visualiser
            </h1>

          </div>
        </div>

        {/* Navigation */}
        <Nav />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/visualiser" element={<Visualiser />} />
          <Route path="/algorithms" element={<Algorithms />}>
            <Route index element={<Kmp />} />
            <Route path="kmp" element={<Kmp />} />
            <Route path="rabin-karp" element={<RabinKarp />} />
            <Route path="z-algorithm" element={<ZAlgorithm />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
