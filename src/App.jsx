import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Why from "./components/Why"
import Achievement from "./components/Achievement";

function App() {
  return (
    <main className="max-w-[1920px]  mx-auto">
      <Navbar/>
      <Hero />
      <Why/>
      <Achievement/>
    </main>
  );
}

export default App;
