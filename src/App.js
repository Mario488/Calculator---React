import {useState, cloneElement} from "react"
import Button from "./Button"

function App() {

  const [result, setResult] = useState("")

  const chars = [
  "←","C",
  "7","8","9","/",
  "4","5","6","*",
  "1","2","3","-",
  "0",".","=","+"
];

  const [Buttons, setButtons] = useState(() =>
  {
     let btns = []
     for(let i = 0; i < chars.length; i++){
        if(chars[i] == '←'){
          btns.push(
            <Button key={i} handleClick={Back} value={chars[i]}
            OMD={MouseDown}
            OMU={MouseUp}
            colspan="2"
            btnStyles={{transform: `scale(1)`}}
            />
          )
          continue
        }
        if(chars[i] == 'C'){
          btns.push(
          <Button key={i} handleClick={Clear} value={chars[i]}
            OMD={MouseDown}
            OMU={MouseUp}
            colspan="2"
            btnStyles={{transform: `scale(1)`}}
            /> 
            )
            continue
        }
        if(chars[i] == '='){
          btns.push(
          <Button key={i} handleClick={Calculate} value={chars[i]}
            OMD={MouseDown}
            OMU={MouseUp}
            btnStyles={{transform: `scale(1)`}}
            /> 
            )
            continue
        }
        else{
          btns.push(
          <Button key={i} handleClick={Char} value={chars[i]} 
            OMD={MouseDown}
            OMU={MouseUp}
            btnStyles={{transform: `scale(1)`}}
            /> 
            )
        }
     }
     return btns
  })

  function MouseDown(val){
    setButtons(prev =>{
       return prev.map(elem =>{
          if(elem.props.value == val){
             return cloneElement(elem, {btnStyles: {transform: "scale(0.9)"}})
          }
          return elem
       })
    })
  }
  
  function MouseUp(val){
    setButtons(prev =>{
       return prev.map(elem =>{
          if(elem.props.value == val){
             return cloneElement(elem, {btnStyles: {transform: "scale(1)"}})
          }
          return elem
       })
    })
  }

  function Char(ch){

    // setResult(prev => prev + ch)
    setResult(prev => {
        let lastChar = prev[prev.length - 1]
        let operators = ['+', '-', '*', '/'] // all possible operators ( + - * / )
        let last = false // last character is not an operator
        let curr = false // current char is not an operator
        for(let i = 0; i < operators.length; i++){
          if(lastChar == operators[i]){
            last = true
          }
          if(ch == operators[i]){
            curr = true
          }
        }
        if(last && ch == '.'){ // last char is operator and curr char is only a dot
          return prev + "0."
        }
        return last && curr ? prev.slice(0, -1) + ch : prev + ch
    })
  }

  function Back(){
    setResult(prev => prev.slice(0, -1))
  }

  function Clear(){
    setResult("")
  }

  function Calculate(){
    setResult(prev => Number.isInteger(eval(prev)) ? `${eval(prev)}` : `${eval(prev).toFixed(2)}`)
  }
  
  return (
      <div className="container">
        <table>
          <tr>
            <td colspan="4" id="myResult">{result != "" ? result : "Welcome, User!"}</td>
          </tr>
          <tr>
            {Buttons[0]}
            {Buttons[1]}
          </tr>
          <tr>
            {Buttons[2]}
            {Buttons[3]}
            {Buttons[4]}
            {Buttons[5]}
          </tr>
          <tr>
            {Buttons[6]}
            {Buttons[7]}
            {Buttons[8]}
            {Buttons[9]}
            
          </tr>
          <tr>
            {Buttons[10]}
            {Buttons[11]}
            {Buttons[12]}
            {Buttons[13]}

          </tr>
          <tr>
            {Buttons[14]}
            {Buttons[15]}
            {Buttons[16]}
            {Buttons[17]}
          </tr>
        </table>
  </div>
  );
}

export default App;
