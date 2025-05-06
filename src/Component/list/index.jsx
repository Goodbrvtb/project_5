import React, { useState } from "react";

function List({ users, textPar }) {
  const [signs, setSigns] = useState({});
  const addSigns = (userId) => {
    setSigns((prevSigns) => {
      const currentText = prevSigns[userId];
      if (currentText == "!!! ") {
        return { ...prevSigns, [userId]: "" };
      } else {
        return { ...prevSigns, [userId]: "!!! " };
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
            {signs[user.id] || ""} {user.name} Пароль: {user.password}
            <div>
              <button onClick={() => addSigns(user.id)}>Click</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
