import { useState } from "react";
import "./App.css";
import FormularioTarefa from "./FormularioTarefa";

function App() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <div className="App">
      <FormularioTarefa
        onTarefaCriada={(novaTarefa) => setTarefas([...tarefas, novaTarefa])}
      />
    </div>
  );
}

export default App;
