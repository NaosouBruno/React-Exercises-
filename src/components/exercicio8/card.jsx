function Card(props) {
  /*  const tittle = (
    <div>
      {itens.map((item) => (
        <div>
          <h1 key={item.id}>{item.setup}</h1>
          <p>{item.punchline}</p>
        </div>
      ))}
    </div>
  ); */

  const content = (
    <div>
      {props.itens.map((item) => (
        <div className="card__div__item" key={item.id}>
          <h1>{item.setup}</h1>
          <p>{item.punchline}</p>
        </div>
      ))}
    </div>
  );

  return <div>{content}</div>;
}

export default Card;
