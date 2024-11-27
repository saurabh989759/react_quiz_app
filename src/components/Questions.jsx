import React from 'react'
import Options from "./Options"
export default function Questions ({question , index , dispatch ,answer })  {
  return (
    <div>
        <h1>{question.question}</h1>
        <Options dispatch = {dispatch} question = {question}  answer = {answer}/> 
    </div>
    
  )
}
