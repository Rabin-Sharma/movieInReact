import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./body/Home";
import Contact from "./Contact";
import { lazy, Suspense, useState } from "react";
import Navbar from "./layouts/Navbar";
import Footer from "./footer/Footer";
import MovieDetail from "./body/MovieDetail";
// import Search from "./body/Search";
import ApiFetch from "./ApiFetch";
import ThemeToggler from "./ThemeToggler/ThemeToggler";
import { ThemeProvider } from "./Context/ThemeContext";

const App = () => {
  const Home = lazy(() => import("./body/Home"));
  const Search = lazy(() => import("./body/Search"));
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/movie-detail/:id" element={<MovieDetail />} />
              <Route path="/movie/search" element={<Search />} />
            </Routes>
          </Suspense>
        </Router>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
