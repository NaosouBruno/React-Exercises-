import "./exercicio2.css";
function Exercicio2() {
  const clicked = () => {
    return alert("Clicked!");
  };
  return (
    <div>
      <h1 className="title">Exercicio2</h1>
      <div className="exercicio2__div">
        <button onClick={clicked}>Click Me</button>
      </div>
    </div>
  );
}

export default Exercicio2;
