import ListItem from "./listItem";
import "./exercicio6.css";
function Exercicio6() {
  /* Forma antiga  */
  /*   const animais = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  const maped = animais.map((animal) => (
    <ListItem key={animal.toString()} value={animal} />
  )); */
  const group = [
    {
      id: 1,
      name: "dog",
      emoj: "🐶",
    },
    {
      id: 2,
      name: "cat",
      emoj: "🐱",
    },
    {
      id: 3,
      name: "chicken",
      emoj: "🐔",
    },
    {
      id: 4,
      name: "cow",
      emoj: "🐮",
    },
    {
      id: 5,
      name: "dog",
      emoj: "🐏",
    },
    {
      id: 6,
      name: "horse",
      emoj: "🐴",
    },
  ];

  return (
    <div>
      <h1 className="title">Exercicio6</h1>
      <ListItem itens={group} />
    </div>
  );
}

export default Exercicio6;
