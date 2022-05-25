import React, { useRef } from "react";
import "./exercicio7.css";
function Exercicio7() {
  const firstName = useRef();
  const lastName = useRef();

  const submiteHandler = (event) => {
    event.preventDefault();
    const name = firstName.current.value;
    const last = lastName.current.value;

    if (name.trim().length > 0 && last.trim().length > 0) {
      alert("Hello " + name + " " + last);
      firstName.current.value = "";
      lastName.current.value = "";
    } else {
      alert("Please, complet all inputs");
    }
  };
  return (
    <div>
      <h1 className="title">Exercicio7</h1>
      <form>
        <div className="exercico7__form__container">
          <input
            className="form__container__input"
            placeholder="First Name"
            type="text"
            ref={firstName}
          />
          <input
            className="form__container__input"
            placeholder="Last Name"
            type="text"
            ref={lastName}
          />
          <button className="form__container__button" onClick={submiteHandler}>
            GREET ME
          </button>
        </div>
      </form>
    </div>
  );
}

export default Exercicio7;
