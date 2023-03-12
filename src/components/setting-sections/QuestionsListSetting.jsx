import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import QuestionsListBox from './../boxes/QuestionsListBox'

import { toggle } from './../../store/handlePopups'
import { useLocation } from 'react-router-dom'

function QuestionsListSetting () {
  const dispatch = useDispatch()
  const path = useLocation().pathname
  const surveyes = useSelector((state) => state.handleSurveyesData.surveyes)
  const questions = surveyes.find(survey => survey.Id === parseFloat(path.split('/')[3])).Questions
  return (
        <div className='px-10 py-5 shadow-sm shadow-gray-300 bg-white/50  mb-6'>
            <span className='flex justify-between my-8'>
                <button onClick={() => dispatch(toggle('addQuestion'))} className='text-white bg-custom-green rounded-lg px-5 py-2 text-base'>افزودن سوال</button>
                <h5 className=' text-xl text-custom-green'>لیست سوالات</h5>
            </span>
            <div className='flex  flex-col items-center w-full'>
                {questions.map(question => <QuestionsListBox key={question.Id} question={question} />)}
            </div>
        </div>
  )
}
export default QuestionsListSetting
