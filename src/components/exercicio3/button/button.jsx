function ButtonEx3(props) {
  const clicked = () => {
    let title = props.tittle;
    return alert("You clicked on Button " + title);
  };
  return (
    <button id={props.id} onClick={clicked}>
      {props.tittle}
    </button>
  );
}

export default ButtonEx3;
