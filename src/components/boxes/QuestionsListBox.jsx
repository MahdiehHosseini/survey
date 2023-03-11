import React from 'react'
import { useDispatch } from 'react-redux'

import QuestionBox from '../boxes/QuestionBox'

import { deleteQuestion } from './../../store/handleSurveyesData'
import { toggle } from './../../store/handlePopups'

function QuestionsListBox ({ question }) {
  const dispatch = useDispatch()
  return (
        <div className='border rounded-xl bg-white py-2 px-10 w-5/6 my-3'>
            <span className='flex justify-between items-center'>
                <span className='flex flex-col'>
                    <button onClick={() => dispatch(toggle('editQuestion'))}><i className=' material-icons mb-3 text-4xl text-custom-green px-2 py-1 rounded-lg border border-custom-green'>edit</i></button>
                    <button onClick={() => dispatch(deleteQuestion(question.Id, question.SurveyId))}><i className=' material-icons text-4xl text-custom-red px-2 py-1 rounded-md border border-custom-red'>delete</i></button>
                </span>
                <QuestionBox isAdmin={true} question={question} />
            </span>
        </div>
  )
}
export default QuestionsListBox
