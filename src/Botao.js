function Botao(prop) {
  return <button onClick={prop.onClickHandler}>{prop.titulo}</button>;
}

export default Botao;
