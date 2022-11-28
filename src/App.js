import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("Поле ввода не должно быть пустым!");
  const [errorDirty, setErrorDirty] = useState(false);
  const [styles, setStyles] = useState("input");
  const [formValid, setFormValid] = useState(false);
  const [completed, setCompleted] = useState("");
  const blurHandler = (e) => {
    if (e.target.name === "texts" && e.target.value === "") {
      setErrorDirty(true);
      setStyles("input error");
    } else {
      setErrorDirty(false);
      setStyles("input");
    }
  };

  useEffect(() => {
    if (error) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [error]);

  useEffect(() => {
    if (text !== "") {
      setError("");
      setStyles("input");
      setFormValid(true);
    } else {
      setError("Поле ввода не должно быть пустым!");
      setFormValid(false);
    }
  }, [text]);

useEffect( 
  () => {
    if(errorDirty === true) {
      setCompleted('')
    }
  },[errorDirty])

const completedT = (e) => {
  if(errorDirty === false) {
    setCompleted('Сообщение успешно отправлено')
    console.log(text)
  } else {
    setCompleted('')
  }
}

  return (
    <div>
      
        <input
          onBlur={(e) => blurHandler(e)}
          className={styles}
          name="texts"
          type="text"
          value={text}
          onChange={handleText}
        />
        <button disabled={!formValid}  onClick={completedT} className="button">
          Отправить
        </button>
        {errorDirty === true && error && (
          <div className="text-error">{error}</div>
        )}

       <div className="completed">{completed} </div>
    
    </div>
  );
}

export default App;
