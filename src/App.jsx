import { useRef, useState } from "react";
import "./App.css";
import List from "./Component/list";
const users = [
  {
    id: 1,
    name: "Иван Иванов",
    password: "ivan123"
  },
  {
    id: 2,
    name: "Мария Петрова",
    password: "maria456"
  },
  {
    id: 3,
    name: "Алексей Сидоров",
    password: "alex789"
  },
  {
    id: 4,
    name: "Елена Кузнецова",
    password: "elena000"
  },
  {
    id: 5,
    name: "Дмитрий Смирнов",
    password: "dmitry321"
  }
];
function App() {
  const [text, setText] = useState("");
  const [ulText, setUlText] = useState("");
  const textInput = useRef(null);
  const valid = () => {
    textInput.current.focus();
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUlText(text);
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <input
          ref={textInput}
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>
      </div>{" "}
      <button onClick={() => valid()}>Фокус</button>
      <div>
        <List users={users} textPar={ulText} />
      </div>
    </>
  );
}

export default App;
