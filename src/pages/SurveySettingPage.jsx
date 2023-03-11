import React from 'react'

import SurveyInfoSetting from '../components/setting-sections/SurveyInfoSetting'
import QuestionsListSetting from '../components/setting-sections/QuestionsListSetting'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function SurveySettingPage () {
  const path = useLocation().pathname
  const surveyes = useSelector((state) => state.handleSurveyesData.surveyes)
  const survey = surveyes.find(survey => survey.Id === parseFloat(path.split('/')[3]))
  return (
    <span className='flex justify-center'>
        <div className='w-4/5'>
            <ul className='flex float-right'>
                <li >{survey.Title} /</li>
                <li className=' text-gray-600'>لیست نظرسنجی</li>
            </ul>
            <SurveyInfoSetting />
            <QuestionsListSetting />
        </div>
    </span>
  )
}
export default SurveySettingPage
