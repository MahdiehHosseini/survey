import React from 'react'
import { useSelector } from 'react-redux'

function QuestionBox ({ question, isAdmin }) {
  const surveyes = useSelector((state) => state.handleSurveyesData.surveyes)
  const survey = surveyes.find(survey => survey.Questions.Id === question.QuestionId)
  const setAnswer = (Option) => {
    // survey.Options = [...survey.Options, { ...Option, IsCorrect: true }]
  }
  return (
    <span className=' py-7 block'>
      <p className=' float-right mb-5 flex'>{question.Title}<p className='ml-1'>-{survey.Questions.indexOf(question) + 1}</p></p>
      <ul className='flex justify-between w-full text-base'>
        {question.Options.map(option => {
          return <li key={option.Id} className='items-center flex'>
            <label htmlFor={option.Id}>{option.Title}</label>
            {
              isAdmin
                ? <input className={`w-3 h-3 ml-2 rounded-full appearance-none ${option.IsCorrect ? 'bg-custom-green' : 'border border-custom-green'}`} name='answer' value={option.Id} onClick={() => setAnswer(option.Id)} id={option.Id} type='radio'></input>
                : <input className='w-3 h-3 ml-2 accent-custom-green' name='answer' value={option.Id} onClick={() => setAnswer(option)} id={option.Id} type='radio'></input>
            }
          </li>
        })}
      </ul>
    </span>
  )
}
export default QuestionBox
