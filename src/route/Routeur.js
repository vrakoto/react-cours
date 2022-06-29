import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function Routeur () {
  return (
    <div className="App">
      <header className="App-header">
        <p>Barre navigation</p>
        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projet">Projet</Link>
          <Link to="/cv">CV</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
    </>
  );
}

function Projet() {
  return (
    <>
      <main>
        <h2>Voici nos projets</h2>
      </main>
    </>
  );
}

function CV() {
  return (
    <>
      <main>
        <h2>Consulter nos CV</h2>
      </main>
    </>
  );
}

function Contact() {
  return (
    <>
      <main>
        <h2>Nous contacter</h2>
      </main>
    </>
  );
}

function NotFound() {
  return (
    <>
      <main>
        <h2>Not found</h2>
      </main>
    </>
  );
}

export default Routeur;