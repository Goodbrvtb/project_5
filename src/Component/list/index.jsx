import React, { useState } from "react";

function List({ users, textPar }) {
  const [text, setText] = useState({});
  const handleClick = (userId) => {
    setText((prevText) => {
      const currentText = prevText[userId];
      if (currentText == "!!! ") {
        return { ...prevText, [userId]: "" };
      } else {
        return { ...prevText, [userId]: "!!! " };
      }
    });
  };
  return (
    <div>
      <p>Список</p>
      <ul>
        {textPar.length > 0 && <li>{textPar}</li>}
        {users.map((user) => (
          <li key={user.id}>
            {" "}
            {text[user.id] || ""} {user.name} Пароль: {user.password}
            <div>
              <button onClick={() => handleClick(user.id)}>Click</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
