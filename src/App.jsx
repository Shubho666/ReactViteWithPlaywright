import { useState } from "react"

export default function App() {
  const isEven = (n) => n % 2 === 0

  const [inputVal, setInputVal] = useState(null);

  const HandleValue = (e) => {
    setInputVal(v => e.target?.value);
  }

  return (
    <div>
      <h1>Hello Vite + Playwright</h1>
      <input data-testid="myinput" onChange={HandleValue} type="Number" step={1}></input>
      {inputVal != null && (<p data-testid="result">
        {isEven(inputVal) ? 'Even' : 'Odd'}
      </p>)}
    </div>
  )
}
