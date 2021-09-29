import { useState } from "react"
import './formStyle.css'


const Form = () => {

    const [numberInput, setNumberInput] = useState('')
    const [sumNumber, setSumNumber] = useState(0)
    const [resultPrint, setResultPrint] = useState('')
    const [mistake, setMistake] = useState('')

    return (
        <div className="wrapper">
            <input type="number" readOnly value={sumNumber} />

            <input type="number" value={numberInput} onChange={(e)=>{
                setNumberInput(Number(e.target.value))

            }}/>

            {/* Sabiranje */}
            <button onClick={()=>{
               if(numberInput !== ''){
                    setSumNumber(sumNumber + numberInput)
                    setResultPrint(`${resultPrint} + ${numberInput}`)
                    setNumberInput('')
                    setMistake('')
               }

                
            }}>+</button>

            {/* Oduzimanje */}
            <button onClick={()=>{
               if(numberInput !== ''){
                setSumNumber(sumNumber - numberInput)
                setResultPrint(`${resultPrint} - ${numberInput}`)
                setNumberInput('')
                setMistake('')
               }

            }}>-</button>

            {/* Mnozenje */}
            <button onClick={()=>{
            if(numberInput !== 0 && numberInput !== ''){
                setSumNumber(sumNumber * numberInput)
                setResultPrint(`${resultPrint} * ${numberInput}`)
                setNumberInput('')
                setMistake('')
            }else if(numberInput === 0){
                setMistake(`It cannot be multiplied by 0`)
            }

            }}>*</button>


            {/* Deljenje */}
            <button onClick={()=>{
            if(numberInput !== 0 && numberInput !== ''){
                setSumNumber(sumNumber / numberInput)
                setResultPrint(`${resultPrint} / ${numberInput}`)
                setNumberInput('')
                setMistake('')
            }else if(numberInput === 0){
                setMistake(`It cannot be divided by 0`)
            }
            

            }}>/</button>


            {/* Brisanje rezultata */}
            <button className="clear-btn" onClick={()=>{
                setSumNumber(0)
                setNumberInput('')
                setResultPrint('')
                setMistake('')
            }}>Clear</button>

            {/* Paragraf za ispisivanje rezultata */}
            <p>{resultPrint}</p>
            <p>{mistake}</p>


        </div>
    )
}


export default Form
