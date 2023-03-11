import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function SurveyInfoSetting () {
  const path = useLocation().pathname
  const surveyes = useSelector((state) => state.handleSurveyesData.surveyes)
  const survey = surveyes.find(survey => survey.Id === parseFloat(path.split('/')[3]))
  const [surveyName, setSurveyName] = useState(survey.Title)
  const [startDate, setStartDate] = useState(survey.StartDate)
  const [endDate, setEndDate] = useState(survey.EndDate)
  const [description, setDescription] = useState(survey.Description)
  return (
        <div className='px-10 py-5 shadow-sm shadow-gray-300 bg-white/40 mt-14 mb-6'>
                    <span className='flex items-center'>
                        <hr className='border w-full border-custom-green' />
                        <h5 className=' text-custom-green text-2xl ml-4'>تنظیمات</h5>
                    </span>
                    <form className='my-10'>
                        <span className='flex justify-between'>
                            <span className='flex'>
                                <span className='flex flex-col text-right text-lg mr-10 w-64'>
                                    <label htmlFor='endDate' className=' text-gray-500 rounded-t-md bg-gray-50 pt-3 px-3'>تاریخ پایان</label>
                                    <input type='date' id='startDate' value={endDate} onChange={(e) => { setEndDate(e.target.value) }} className=' text-left text-custom-green outline-none focus:outline-none rounded-b-xl w-full p-2 bg-gray-50' />
                                </span>
                                <span className='flex flex-col text-right text-lg w-64'>
                                    <label htmlFor='startDate' className=' text-gray-500 rounded-t-md bg-gray-50 pt-3 px-3'>تاریخ شروع</label>
                                    <input type='date' id='startDate' value={startDate} onChange={(e) => { setStartDate(e.target.value) }} className=' text-left text-custom-green outline-none focus:outline-none rounded-b-xl w-full p-2 bg-gray-50' />
                                </span>
                            </span>
                            <span className='flex flex-col text-right text-lg'>
                                <label htmlFor='surveyName' className=' text-gray-500 rounded-t-md bg-gray-50 pt-3 pb-2 px-3'>نام نظرسنجی</label>
                                <input id='surveyName' value={surveyName} onChange={(e) => { setSurveyName(e.target.value) }} className='text-right pr-3 rounded-b-md focus:outline-none w-full bg-gray-50 pb-3' />
                            </span>
                        </span>
                        <span className='flex flex-col text-right text-lg w-full mt-8'>
                            <label htmlFor='description' className=' text-gray-500 rounded-t-md bg-gray-50 pt-3 px-3'>توضیحات</label>
                            <textarea
                                id='description'
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                                className='px-4 py-4 text-right focus:outline-none w-full rounded-b-md bg-gray-50'
                            />
                        </span>
                    </form>
                </div>
  )
}
export default SurveyInfoSetting
