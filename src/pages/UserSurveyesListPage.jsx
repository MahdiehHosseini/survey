import React from 'react'
import { useSelector } from 'react-redux'

import SurveyBox from '../components/boxes/SurveyBox'

function UserSurveyesListPage () {
  const surveyes = useSelector((state) => state.handleSurveyesData.surveyes)
  return (
      <div className='my-20'>
        {surveyes.map(survey => <SurveyBox survey={survey} key={survey.Id} />)}
      </div>
  )
}
export default UserSurveyesListPage
