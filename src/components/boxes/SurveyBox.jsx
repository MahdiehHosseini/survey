import React from 'react'
import { Link } from 'react-router-dom'

function SurveyBox ({ survey }) {
  const remainDate = (new Date(survey.EndDate.getFullYear(), survey.EndDate.getMonth(), survey.EndDate.getDate()).getTime() - new Date(survey.StartDate.getFullYear(), survey.StartDate.getMonth(), survey.StartDate.getDate())) / (1000 * 60 * 60 * 24)
  return (
    <span className=' flex justify-center my-10'>
      <Link to={`/surveyes-list/survey/${survey.Id}`} className='bg-white border relative border-custom-green rounded-xl p-8 w-4/6 h-full'>
          <h2 className=' text-xl text-custom-green bg-white absolute -top-6 right-7 p-3'>{survey.Title}</h2>
          <span className=' justify-between flex w-full text-base mb-5'>
          {remainDate > 0
            ? <span className=' justify-between flex w-full text-base mb-3'>
                <p className='text-custom-red flex'> روز تا پایان نظر سنجی <p className='ml-1'>{remainDate}</p></p><p className=' text-custom-green items-center flex'>
                  درحال برگزاری
                  <svg className='w-3 h-3 ml-2 rounded-full bg-custom-green' />
                </p>
              </span>
            : <span className='flex w-full justify-end text-right text-base mb-3'>
                <p className=' text-custom-red flex items-center'>
                  به اتمام رسیده
                  <svg className='w-3 h-3 ml-2 rounded-full bg-custom-red' />
                </p>
            </span>
          }
          </span>
          <p className=' text-lg text-right'>{survey.Description}</p>
      </Link>
    </span>
  )
}
export default SurveyBox
