import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023!"]);

  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };
  return (
    <>
      <Particles
        init={particleInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <span className="text-white text-4xl font-bold z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"_"}
            cursor
          />
        </span>
      </div>
    </>
  );
}

export default App;
