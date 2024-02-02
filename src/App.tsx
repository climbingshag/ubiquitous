import { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { LoadingSpinner } from "./Components";
import { useMe } from "./Api/Models/User/MeHooks";

function Me() {
  const me = useMe();
  console.log("Me", me);
  return <></>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Suspense fallback={<LoadingSpinner />}>
          <Me></Me>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
