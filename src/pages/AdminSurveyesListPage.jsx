import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SurveyBox from './../components/boxes/SurveyBox'

import { toggle } from './../store/handlePopups'

function AdminSurveyesListPage () {
  const dispatch = useDispatch()
  const surveyes = useSelector((state) => state.handleSurveyesData.surveyes)
  return (
      <div className='mt-20 mb-40 flex relative'>
        <span className=''>
          <button onClick={() => dispatch(toggle('addSurvey'))} className=' text-white fixed bottom-20 left-20 bg-custom-green px-8  py-4 rounded-lg'>افزودن نظرسنجی</button>
        </span>
        <span className='w-full'>
          {surveyes.map(survey => <SurveyBox key={survey.Id} survey={survey} />)}
        </span>
      </div>
  )
}
export default AdminSurveyesListPage
