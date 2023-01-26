import { useState } from "react";
import expChanger from "./expChanger";
import expCalculate from "./expCalculate";
import expToArr from "./expToArr";

function App() {
  const [result, setResult] = useState("");
  const [exp, setExp] = useState("");

  const onChange = (e) => setExp(e.target.value);
  const onCalClick = () => setResult(expCalculate(expChanger(expToArr(exp))));
  const onResetClick = () => setExp("");

  return (
    <div>
      <p>exp : {exp}</p>
      <p>result : {result}</p>
      <input type="text" value={exp} onChange={onChange} />
      <button onClick={onCalClick}>calculate</button>
      <button onClick={onResetClick}>reset</button>
    </div>
  );
}

export default App;
