import "./exercicio5.css";
function Exercicio5() {
  const animais = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  const maped = animais.map((animal) => (
    <li key={animal.toString()}>{animal}</li>
  ));

  return (
    <div className="exercicio5__container">
      <h1 className="title">Exercicio5</h1>
      <ul>{maped}</ul>
    </div>
  );
}

export default Exercicio5;
