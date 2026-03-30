import { useState } from "react";
import Counter from "./Components/Counter";
import Counterbuttons from "./Components/CounterButton";
import Reset from "./Components/Reset";
import Title from "./Components/Title";

export default function App() {
  const [count, setCount] = useState(0);
  return(
    <> 
    <main>
      <div className="card">
        <Title />
        <Counter count={count} setCount={setCount} />
        <Reset setCount={setCount} />
        <Counterbuttons count={count} setCount={setCount} />
        </div>
        </main>
        </>
  );


}