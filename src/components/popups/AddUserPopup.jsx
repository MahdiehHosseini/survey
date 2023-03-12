import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addUser } from './../../store/handleUsersData'
import { toggle } from './../../store/handlePopups'

function AddUserPopup () {
  const [address, setAddress] = useState('')
  const [userName, setUserName] = useState('کاربر 21')
  const [password, setPassword] = useState('4518784')
  const [fullName, setFullName] = useState('کاربر')
  const [phoneNumber, setPhoneNumber] = useState('0921111111')
  const dispatch = useDispatch()
  return (
    <span className='h-screen w-screen top-0 absolute z-10 flex justify-center items-center bg-black/50'>
        <div className=' bg-white rounded-2xl p-10 z-20 absolute items-center flex flex-col h-2/3 w-1/3'>
            <h5 className=' text-center text-lg text-custom-green mt-6 mb-5'>افزودن کاربر</h5>
            <form onSubmit={() => dispatch(addUser({ UserName: userName, CreatedDate: new Date(), Password: password, Address: address, FullName: fullName, PhoneNumber: phoneNumber }))} >
                <span className='flex items-center my-4 justify-end'>
                    <input type='checkbox' className=' accent-custom-green mr-3' />
                    <p className='text-base'>دسترسی ادمین</p>
                </span>
                <div className=' flex items-center justify-between w-full'>
                    <span className='flex flex-col w-full mr-10'>
                        <span className='flex flex-col text-right text-base'>
                            <label htmlFor='surveyTitle' className=' text-gray-500 rounded-t-xl bg-gray-50 pt-3 px-3'>رمز عبور</label>
                            <input onChange={(e) => { setPassword(e.target.value) }} id='surveyTitle' value={password} className='rounded-b-xl text-right pr-3 focus:outline-none w-full bg-gray-50 py-2 text-custom-green' />
                        </span>
                        <span className='flex flex-col text-right text-base my-7'>
                            <label htmlFor='surveyTitle' className=' text-gray-500 rounded-t-xl bg-gray-50 pt-3 px-3'>شماره تماس</label>
                            <input onChange={(e) => { setPhoneNumber(e.target.value) }} id='surveyTitle' value={phoneNumber} className='rounded-b-xl text-right pr-3 focus:outline-none w-full bg-gray-50 py-2 text-custom-green' />
                        </span>
                    </span>
                    <span className='flex flex-col w-full'>
                        <span className='flex flex-col text-right text-base'>
                            <label htmlFor='surveyTitle' className=' text-gray-500 rounded-t-xl bg-gray-50 pt-3 px-3'>نام کاربری</label>
                            <input onChange={(e) => { setUserName(e.target.value) }} id='surveyTitle' value={userName} className='rounded-b-xl text-right pr-3 focus:outline-none w-full bg-gray-50 py-2 text-custom-green' />
                        </span>
                        <span className='flex flex-col text-right text-base my-7'>
                            <label htmlFor='surveyTitle' className=' text-gray-500 rounded-t-xl bg-gray-50 pt-3 px-3'>نام و نام خانوادگی</label>
                            <input onChange={(e) => { setFullName(e.target.value) }} id='surveyTitle' value={fullName} className='rounded-b-xl text-right pr-3 focus:outline-none w-full bg-gray-50 py-2 text-custom-green' />
                        </span>
                    </span>
                </div>
                <span className='flex flex-col h-24 text-right text-base w-full mr-10'>
                    <label htmlFor='description' className=' text-gray-500 rounded-t-xl bg-gray-50 pt-3 px-3'>آدرس</label>
                    <textarea
                        id='description'
                        onChange={(e) => { setAddress(e.target.value) }}
                        value={address}
                        className=' p-5 rounded-b-xl text-right focus:outline-none h-full bg-gray-50 pb-1 py-1 text-custom-green'
                    />
                </span>
                <span className='flex justify-between w-full items-center px-16 mt-10'>
                    <button type='button' onClick={() => dispatch(toggle('none'))} className=' text-white bg-custom-red rounded-lg px-12 py-4 text-base'>لغو</button>
                    <button type='submit' className=' text-white bg-custom-green rounded-lg px-12 py-4 text-base'>افزودن</button>
                </span>
            </form>
        </div>
    </span>
  )
}
export default AddUserPopup
