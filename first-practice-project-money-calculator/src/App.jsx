import { useEffect, useState } from "react"
import Header from "./components/Header"
import InputData from "./components/InputData"
import Table from "./components/Table"
import { calculateInvestmentResults } from "./util/investment"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const isInputValid = userInput.duration > 0
  const annualData = calculateInvestmentResults(userInput)


  function handleInputChange(newValue, inputID) {
    setUserInput(prevValue => ({ ...prevValue, [inputID]: newValue }))
  }

  return (
    <>
      <Header />
      <InputData userInput={userInput} onInputChange={handleInputChange} />
      {!isInputValid && <p className="center"> Please anter a duration grater than zero.</p>}
      {isInputValid && <Table annualData = {annualData}/>}
    </>
  )
}

export default App
