import Card from "./card";
import "./exercicio8.css";
function Exercicio8() {
  const itens = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];
  return (
    <div>
      <h1 className="title">Exercicio8</h1>
      <Card itens={itens} />
    </div>
  );
}

export default Exercicio8;
