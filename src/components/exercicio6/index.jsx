import ListItem from "./listItem";
import "./exercicio6.css";
function Exercicio6() {
  const animais = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  const maped = animais.map((animal) => (
    <ListItem key={Math.random().toString()} value={animal} />
  ));
  return (
    <div>
      <h1 className="title">Exercicio6</h1>
      <div className="exercicio6__list">{maped}</div>
    </div>
  );
}

export default Exercicio6;
