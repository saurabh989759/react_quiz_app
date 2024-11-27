import { useEffect, useReducer } from "react"
import QUIZ_DATA from "./data/question.json"

const initialState = {
  questions:[] ,
  status: "loading" ,
  index : 0 ,
  answer : null ,
  secondsRemaining : null , 
}
const reducer = (state , action) => {
  switch(action.type){
     case 'dataRecieved':
      return {
        ...state , 
        questions : action.payload ,
        status : 'ready'
      }
  }
}

function App() {
  cosnt [{questions , status , index , answer , secondsRemaining} , dispatch ] = 
  useReducer(reducer , initialState) ; 

  useEffect(() => {
    dispatch( {type : dataRecieved , payload : QUIZ_DATA.questions} )
  }, [])// useeffect will run after the cfompionent is loaded 

  return (
    <div>
      This is the React Questions
      {
        status === 'ready' ? <Questions question = {q}/>
      }
     <footer>
      <NextButton/>
      <Timer/>
     </footer>
    </div>
  )
}

export default App
