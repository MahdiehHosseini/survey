import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { editQuestion } from './../../store/handleSurveyesData'
import { toggle } from './../../store/handlePopups'

function EditQuestionPopup () {
  const dispatch = useDispatch()
  const [questionTitle, setQuestionTitle] = useState('')
  const [options, setOptions] = useState([
    {
      Id: 1,
      Title: 'کم',
      IsCorrect: false
    }, {
      Id: 10,
      Title: 'متوسط',
      IsCorrect: false
    }, {
      Id: 15,
      Title: 'زیاد',
      IsCorrect: true
    }, {
      Id: 8,
      Title: 'خیلی زیاد',
      IsCorrect: false
    }
  ])
  const setAnswer = (Option) => {
    const correctOptionIndex = options.indexOf(options.find(option => option.IsCorrect === true))
    options[correctOptionIndex].IsCorrect = false
    const newCorrectOptionIndex = options.indexOf(Option)
    options[newCorrectOptionIndex].IsCorrect = true
    setOptions([...options, Option])
    console.log(options)
  }
  const setTitle = (title, Option) => {
    // const editedOptionIndex = options.indexOf(Option)
    // options[editedOptionIndex].title = title
    // setOptions([...options, Option])
  }
  console.log(options)
  return (
    <span className='h-screen w-screen top-0 absolute z-10 flex justify-center items-center bg-black/50'>
        <div className=' bg-white rounded-2xl p-10 z-20 absolute items-center flex flex-col h-auto w-1/4'>
            <h5 className=' text-center text-lg text-custom-green mt-6 mb-9'>ویرایش سوال</h5>
            <form className=' relative h-full flex flex-col items-center' onSubmit={() => dispatch(editQuestion({ Title: questionTitle, Options: [] }))}>
                    <span className='flex flex-col text-right text-sm mb-8'>
                        <label htmlFor='surveyName' className=' text-gray-500 rounded-t-xl bg-gray-50 pt-3 px-3'>سوال</label>
                        <input id='surveyName' value={questionTitle} onChange={(e) => setQuestionTitle(e.target.value)} className='rounded-b-xl text-right pr-3 focus:outline-none w-80 h-auto bg-gray-50 py-2 text-custom-green' />
                    </span>
                    <span className='flex mb-14 flex-col text-right text-sm'>
                        <label className=' text-gray-500 rounded-t-xl bg-gray-50 pt-3 px-3'>گزینه ها</label>
                        <span className='rounded-b-xl pr-3 bg-gray-50 w-80 pl-20 pt-5 pb-7'>
                            <span className='flex flex-col text-custom-green'>
                                <div className=' flex justify-between '>
                                    <span className=' flex items-center'>
                                        <input type='text' value={options[0].Title} onChange={(e) => setTitle(e.target.value, options[0])} className=' text-right focus:outline-none bg-gray-50 border-b border-b-custom-green w-20 pb-1 appearance-none'/>
                                        <input name='answer' value={options[0].Id} onClick={() => setAnswer(options[0])} type='radio' className='w-4 h-4 ml-2 accent-custom-green' />
                                    </span>
                                    <span className=' flex items-center'>
                                        <input type='text' value={options[1].Title} onChange={(e) => setTitle(e.target.value, options[1])} className='text-right focus:outline-none bg-gray-50  border-b border-b-custom-green w-20 pb-1 appearance-none' />
                                        <input name='answer' value={options[1].Id} onClick={(e) => setAnswer(options[1])} type='radio' className='w-4 h-4 ml-2 accent-custom-green' />
                                    </span>
                                </div>
                                <div className=' flex justify-between mt-10'>
                                    <span className=' flex items-center'>
                                        <input type='text' value={options[2].Title} onChange={(e) => setTitle(e.target.value, options[2])} className='text-right focus:outline-none bg-gray-50  border-b border-b-custom-green w-20 pb-1 appearance-none' />
                                        <input name='answer' value={options[2].Id} onClick={(e) => setAnswer(options[2])} type='radio' className='w-4 h-4 ml-2 accent-custom-green' />
                                    </span>
                                    <span className=' flex items-center'>
                                        <input type='text' value={options[3].Title} onChange={(e) => setTitle(e.target.value, options[3])} className='text-right focus:outline-none bg-gray-50  border-b border-b-custom-green w-20 pb-1 appearance-none' />
                                        <input name='answer' value={options[3].Id} onClick={(e) => setAnswer(options[3])} type='radio' className='w-4 h-4 ml-2 accent-custom-green' />
                                    </span>
                                </div>
                            </span>
                        </span>
                    </span>
                    <span className='flex justify-between absolute -bottom-16 mt-6 w-full items-center'>
                      <button type='button' onClick={() => dispatch(toggle('none'))} className=' text-white bg-custom-red rounded-lg px-10 py-3 text-sm my-14'>لغو</button>
                      <button type='submit' className=' text-white bg-custom-green rounded-lg px-10 py-3 text-sm my-14'>ویرایش</button>
                    </span>
            </form>
        </div>
    </span>
  )
}
export default EditQuestionPopup
