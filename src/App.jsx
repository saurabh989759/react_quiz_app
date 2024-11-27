import { useEffect, useReducer } from "react"
import QUIZ_DATA from "./data/question.json"
import Questions from "./components/Questions"
import NextButton from "./components/NextButton"
//import Timer from "./components/Timer"
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
    case 'hasAnswered' :
      return {
        ...state,
        answer : action.payload
      }
  }
}

function App() {
  const [{questions , status , index , answer , secondsRemaining} , dispatch ] = 
  useReducer(reducer , initialState) ; 

  useEffect(() => {
    dispatch( {type : "dataRecieved" , payload : QUIZ_DATA.questions} )
  }, [])// useeffect will run after the cfompionent is loaded 

  return (
    <div>
      This is the React Questions
      {
        status === 'ready' 
        ?
         <Questions question = {questions[index]} answer = {answer} index = {index} dispatch = {dispatch}/>
        :<>Still loading Wait for few seconds</>
      }
     <footer>
      <NextButton/>
      
     </footer>
    </div>
  )
}

export default App
