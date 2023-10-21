import React, { useState } from 'react'
import { Quizdata } from '../Data/Quizdata'
import QuizResult from './QuizResult'

const Quiz = () => {
    const [cntQuestion, setCntquestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clickedOption, setClickedOption] = useState();
    const[showResult,setShowResult]=useState(false)

    const changeQuestion = () => {
        updateScore();
        if (cntQuestion < Quizdata.length - 1) {
            setCntquestion(cntQuestion + 1);
            setClickedOption(0)
        } else {
setShowResult(true)
        }
    }
    const updateScore = () => {
        if (clickedOption === Quizdata[cntQuestion].answer) {
            setScore(score + 1)
        }
    }
    return (
        <>
            <p className='heading-txt'>QUIZ APP</p>
            <div className='container'>
            {showResult ? (<QuizResult score={score} totalScore={Quizdata.length}/>
            ):(
                <>
                <div className='question'>
                    <span id='question-number'>{cntQuestion + 1}</span>
                    <span id='question-txt'>{Quizdata[cntQuestion].question}</span>
                </div>
                <div className='option-container'>
                    {Quizdata[cntQuestion].options.map((options, i) => {
                        return (
                            <button 
                            // className='option-btn'
                            className={`option-btn ${
                                clickedOption == i+1?'checked':null
                            }`}
                             key={i}
                              onClick={() => setClickedOption(i + 1)}>
                                {options}
                            </button>
                        )
                    })}
                </div>
                <input type='button' value='Next' id='next-button' onClick={changeQuestion} />
                </>
                )}
            </div>
        </>
    )
}

export default Quiz