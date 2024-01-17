import React, { useState, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Why from "./components/Why";
import Achievement from "./components/Achievement";
import Footer from "./components/Footer";
import Members from "./components/Members";
import NavMobile from "./components/NavMobile";
import Newsletter from "./components/Newsletter";

function App() {
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <main className="max-w-[1920px] overflow-hidden mx-auto" id="home">
      <Navbar setNavMobile={setNavMobile} />
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
      <Hero />
      <Why />
      <Achievement />
      <Members />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
