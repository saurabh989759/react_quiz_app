import React from 'react';
//mport Button from '@mui/material/Button';

export default function NextButton({dispatch , answer , questions , index}) {
   if( answer === null )return null ; 
   if (index < questions - 1) {
      return <button onClick={() => dispatch({type: 'nextQuestion'})}>Next Question</button>;
    } 
    else if (index === questions - 1) {
      return <button onClick={() => dispatch({type: 'finish'})}>Finish</button>;
    }
}
