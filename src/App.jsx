import { useEffect, useReducer } from "react"
import QUIZ_DATA from "./data/question.json"
import Questions from "./components/Questions"
import NextButton from "./components/NextButton"
import Timer from "./components/Timer"
//import Timer from "./components/Timer"
const initialState = {
  questions:[] ,
  status: "loading" ,
  index : 0 ,
  answer : null ,
  secondsRemaining : null , 
}
const sec = 30 ; 
const reducer = (state , action) => {
  switch(action.type){
     case 'dataRecieved':
      return {
        ...state , 
        questions : action.payload ,
        status : 'ready' , 
        secondsRemaining : state.questions.length * sec  ,
      }
    case 'hasAnswered' :
      return {
        ...state,
        answer : action.payload
      }
    case 'nextQuestion' :
      return { 
        ...state ,
        index : state.index + 1 ,
       
        answer :null ,
      }
      case 'finish':
        return {
          ...state,
          status : finish , 
        }
      case 'tick':
        return {
          ...state,
          secondsRemaining : state.secondsRemaining-1 ,
        }
  }
}

function App() {
  const [{questions , status , index , answer , secondsRemaining} , dispatch ] = 
  useReducer(reducer , initialState) ; 
  const numQuestions = questions.length;
  console.log(index)
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
      <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
      <NextButton dispatch = {dispatch} index = {index} questions ={numQuestions} answer = {answer}/>
      
     </footer>
    </div>
  )
}

export default App
