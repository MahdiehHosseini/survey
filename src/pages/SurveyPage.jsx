import React from 'react'

import QuestionBox from '../components/boxes/QuestionBox'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { deleteSurvey } from './../store/handleSurveyesData'

function SurveyPage () {
  const path = useLocation().pathname
  const surveyes = useSelector((state) => state.handleSurveyesData.surveyes)
  const survey = surveyes.find(survey => survey.Id === parseFloat(path.split('/')[3]))
  const dispatch = useDispatch()
  return (
    <span className='flex justify-center'>
        <div className='w-4/5'>
            <ul className='flex float-right'>
                <li >{survey.Title}  /</li>
                <li className=' text-gray-600'>لیست نظرسنجی</li>
            </ul>
            <div className=' shadow-sm shadow-gray-200 text-right bg-white/50 p-6'>
                <div className='flex justify-between mt-14 mb-6 items-center'>
                    <span className='flex flex-row '>
                        <button onClick={() => dispatch(deleteSurvey(survey.Id))}><i className=' material-icons text-3xl text-custom-red px-2 py-1 rounded-md border border-custom-red'>delete</i></button>
                        <Link to='setting'><i className=' material-icons ml-3 text-3xl text-custom-green px-2 py-1 rounded-lg border border-custom-green'>edit</i></Link>
                    </span>
                    <h3 className=' text-custom-green text-xl '>{survey.Title}</h3>
                </div>
                <hr className='border w-full' />
                <div>
                    {survey.Questions.map(question => <QuestionBox isAdmin={false} key={question.Id} question={question} />)}
                </div>
            </div>
        </div>
    </span>
  )
}
export default SurveyPage
