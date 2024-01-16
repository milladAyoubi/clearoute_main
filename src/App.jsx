import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="max-w-[1920px]  mx-auto">
      <Navbar/>
      <Hero />
    </main>
  );
}

export default App;
