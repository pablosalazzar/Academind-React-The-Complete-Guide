import { useState } from "react"

export default function InputData({userInput, onInputChange}) {


    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input value={userInput.initialInvestment} type="number" name="" id="" 
                    onChange={() => onInputChange(event.target.value, 'initialInvestment')} />
                </p>
                <p>
                    <label htmlFor="">Anual Investment</label>
                    <input type="number" name="" id=""
                        value={userInput.annualInvestment}
                        onChange={e => onInputChange(e.target.value, 'annualInvestment' )}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" name="" id=""
                    value={userInput.expectedReturn}
                    onChange={e=> onInputChange(e.target.value,'expectedReturn')}
                    />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" name="" id="" 
                    value={userInput.duration}
                    onChange={e=> onInputChange(e.target.value, 'duration')}
                    />
                </p>
            </div>
        </div>
    )
}