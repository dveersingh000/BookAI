import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css"; 
import Features from "./components/Features";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}

export default App;

