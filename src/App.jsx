import React, { useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Why from "./components/Why";
import Achievement from "./components/Achievement";
import Footer from "./components/Footer";
import Members from "./components/Members";
import NavMobile from "./components/NavMobile";

function App() {
  const [navMobile, setNavMobile] = useState(false);
  console.log(navMobile);
  return (
    <main className="max-w-[1920px] overflow-hidden mx-auto">
      <Navbar setNavMobile={setNavMobile} />
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
      <Hero />
      <Why />
      <Achievement />
      <Members />
      <Footer />
    </main>
  );
}

export default App;
