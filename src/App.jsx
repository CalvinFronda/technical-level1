import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // TODO: how do you increment or decrement the count?

  return (
    <div className="main-container">
      <header>Counter</header>

      <div>
        <span>current count: {count}</span>
      </div>

      <div className="counter-container">
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    </div>
  );
}

export default App;
