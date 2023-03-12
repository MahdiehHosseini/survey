import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addSurvey } from './../../store/handleSurveyesData'
import { toggle } from './../../store/handlePopups'

function AddSurveyPopup () {
  const [description, setDescription] = useState('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد')
  const [surveyTitle, setSurveyTitle] = useState('نظرسنجی 1')
  const [startDate] = useState('1401,12,10')
  const [endDate, setEndDate] = useState('1401,12,10')
  const dispatch = useDispatch()
  return (
    <span className='h-screen w-screen top-0 absolute z-10 flex justify-center items-center bg-black/50'>
        <div className=' bg-white rounded-2xl p-10 z-20 absolute items-center flex flex-col h-2/3 w-1/3'>
            <h5 className=' text-center text-lg text-custom-green mt-6 mb-10'>افزودن نظرسنجی</h5>
            <form onSubmit={() => dispatch(addSurvey({ SurveyTitle: surveyTitle, StartDate: startDate, EndDate: endDate, Description: description }))} >
                <div className=' flex items-center justify-between w-full h-4/6'>
                    <span className='flex flex-col text-right text-base h-full w-full mr-10'>
                        <label htmlFor='description' className=' text-gray-500 rounded-t-xl bg-gray-50 pt-3 px-3'>توضیحات</label>
                        <textarea
                            id='description'
                            onChange={(e) => { setDescription(e.target.value) }}
                            value={description}
                            className=' p-5 rounded-b-xl text-right focus:outline-none h-full bg-gray-50 pb-1 py-1 placeholder:text-custom-green'
                        />
                    </span>
                    <span className='flex flex-col w-full'>
                        <span className='flex flex-col text-right text-base'>
                            <label htmlFor='surveyTitle' className=' text-gray-500 rounded-t-xl bg-gray-50 pt-3 px-3'>نام نظرسنجی</label>
                            <input onChange={(e) => { setSurveyTitle(e.target.value) }} id='surveyTitle' value={surveyTitle} className='rounded-b-xl text-right pr-3 focus:outline-none w-full bg-gray-50 py-2 placeholder:text-custom-green' />
                        </span>
                        <span className='flex flex-col text-right text-base my-10 w-full'>
                            <label htmlFor='startDate' className=' text-gray-500 rounded-t-xl bg-gray-50 pt-3 px-3'>تاریخ شروع</label>
                            <input type='date' id='startDate' value={endDate} onChange={(e) => { setEndDate(e.target.value) }} className=' text-left text-custom-green outline-none focus:outline-none rounded-b-xl w-full p-2 bg-gray-50' />
                        </span>
                        <span className='flex flex-col text-right text-base w-full'>
                            <label htmlFor='endDate' className=' text-gray-500 rounded-t-xl bg-gray-50 pt-3 px-3'>تاریخ پایان</label>
                            <input type='date' id='startDate' value={endDate} onChange={(e) => { setEndDate(e.target.value) }} className=' text-left text-custom-green outline-none focus:outline-none rounded-b-xl w-full p-2 bg-gray-50' />
                        </span>
                    </span>
                </div>
                <span className='flex justify-between w-full items-center px-5'>
                    <button type='button' onClick={() => dispatch(toggle('none'))} className=' text-white bg-custom-red rounded-lg px-12 py-4 text-base my-14'>لغو</button>
                    <button type='submit' className=' text-white bg-custom-green rounded-lg px-12 py-4 text-base my-14'>افزودن</button>
                </span>
            </form>
        </div>
    </span>
  )
}
export default AddSurveyPopup
