import { useCallback } from "react";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  const [numArr, setNumArr] = useState([]);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
