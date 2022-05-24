function listItem(props) {
  const exibi = (
    <div className="listItem__container">
      {props.itens.map((item) => (
        <div key={item.id} className="listItem__itens">
          <p>
            {item.emoj} {item.name}
          </p>
        </div>
      ))}
    </div>
  );
  return <>{exibi}</>;
}

export default listItem;
