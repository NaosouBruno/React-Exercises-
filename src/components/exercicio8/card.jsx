function Card(props) {
  const content = (
    <div className="card__container">
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
