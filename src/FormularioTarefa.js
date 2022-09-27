import Botao from "./Botao";

function FormularioTarefa() {
  return (
    <div className="FormularioTarefa">
      <input type="text" placeholder="Introduz a tua tarefa" />
      <Botao
        titulo="Adicionar"
        onClickHandler={() => alert("Tarefa Adicionada")}
      />
    </div>
  );
}

export default FormularioTarefa;
