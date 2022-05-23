import ButtonEx3 from "./button/button.jsx";
import "./exercicio3.css";
function Exercicio3(props) {
  return (
    <div>
      <h1 className="title">Exercicio3</h1>
      <div className="exercicio3__div">
        <ButtonEx3 id="1" tittle="Button 1" />
        <ButtonEx3 id="2" tittle="Button 2" />
        <ButtonEx3 id="3" tittle="Button 3" />
      </div>
    </div>
  );
}

export default Exercicio3;
