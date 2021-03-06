import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetPokemonByNameQuery } from "./features/posts/getSlice";
import { useGaddPokemonMutation } from "./features/posts/postSlice";

function App() {
  const [count, setCount] = useState(0);
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  const [addpokemon, result] = useGaddPokemonMutation();

  console.log({ result });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <button onClick={() => addpokemon("test")}>click me</button>
      </header>
    </div>
  );
}

export default App;
