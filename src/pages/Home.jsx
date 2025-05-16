// src/pages/Home.jsx
import "./Home.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="home-container">
        <h1>Welcome to Soul's Purpose</h1>
        <p>
          Unlock the secrets of your past lives and discover your soul's
          purpose through our guided regression sessions.
        </p>
        <a href="/see-past-life">
          <button>See Your Past Life</button>
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
