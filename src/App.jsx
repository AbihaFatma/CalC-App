import Display from "./components/Display";
import styles from "./App.module.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState([]);
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "√x") {
      const result = Math.sqrt(eval(calVal));
      setCalVal(result);
    } else if (buttonText === "log") {
      const result = Math.log10(eval(calVal));
      setCalVal(result);
    } else if (buttonText === "x2") {
      const result = eval(calVal ** 2);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <Button onButtonClick={onButtonClick}></Button>
    </div>
  );
}

export default App;
