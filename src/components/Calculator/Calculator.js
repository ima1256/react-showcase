import { useRef, useState } from 'react'
import './Calculator.css'

function Calculator() {

    const calculatorElements = [

        { value: '7', type: 'number' },
        { value: '8', type: 'number' },
        { value: '9', type: 'number' },
        { value: '/', type: 'operator' },
        { value: '4', type: 'number' },
        { value: '5', type: 'number' },
        { value: '6', type: 'number' },
        { value: '*', type: 'operator' },
        { value: '1', type: 'number' },
        { value: '2', type: 'number' },
        { value: '3', type: 'number' },
        { value: '-', type: 'operator' },
        { value: '0', type: 'number' },
        { value: '.', type: 'decimal' },
        { value: '=', type: 'equals' },
        { value: '+', type: 'operator' },
        { value: 'C', type: 'clear' },
        // { value: '±', type: 'plus-minus' }, // for switching sign of the number
        // { value: '%', type: 'percent' } // for percentage operation

    ];    

    const [result, setResult] = useState('')
    const [operator, setOperator] = useState('')
    const decimal = useRef(false)

    const calculateResult = (calcElem) => {

        console.log('calculateResult', calcElem)

        if (calcElem.type === 'number') {
            // const res = result
            // res += calcElem.value
            setResult(result+calcElem.value)
        } else if (calcElem.type === 'decimal') {

            if (!decimal.current) {
                setResult(result+calcElem.value)
                decimal.current = true
            } 

        } else if (calcElem.type === 'clear') {
            setResult('')
        } else if (calcElem.type === 'operator') {

            if ( ! operator ) {

                setOperator(calcElem.value)
    
                setResult(result + ' ' + calcElem.value + ' ')

            }


        } else if (calcElem.type === 'equals') {

            if (operator) {
                
                setResult(parseFloat(eval(result).toFixed(4)).toString())
                setOperator('')
            }

        }

    }

    return (

        <div className="wrap calculator">

            <div className='screen'>
                {result}
            </div>

            {/* <div className='log'>
                Operator: {operator}
                Result Type: {typeof result}
            </div> */}

            <div className='cells'>

                {calculatorElements.map(elem => (

                    <Number key={elem.value} number={elem} process={calculateResult} ></Number>

                ))}
                
                
            </div>

        </div>

    )

}

function Number({number, process}) {

    return (

        <div onClick={() => process(number)} className='number-wrap'>
            {number.value}
        </div>

    )

}

// function Operator() {

// }

export default Calculator