import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const sendData = (obj) => {
    console.log(obj)
  }
  return (
    <span className='h-screen w-full justify-center flex flex-col items-center'>
      <div className=' text-center shadow-lg shadow-gray-300 w-1/4 h-3/5 rounded-2xl bg-white'>
        <p className=' text-2xl text-custom-green mt-10'>شرکت ملی گاز</p>
        <hr className=' mx-20 border my-6' />
        <form onSubmit={ sendData({ Username: username, Password: password }) } className='flex flex-col justify-center items-center w-full h-full'>
          <div className='flex flex-col justify-around h-1/4 w-2/3 mb-20'>
            <span className='text-right'>
              <label className=' text-custom-green'>نام کاربری</label>
              <input onChange={(e) => setUsername(e.target.value)} value={username} className='border-b border-b-custom-green-56 w-full h-10 focus:outline-none text-right' />
            </span>
            <span className='text-right mt-5'>
              <label className=' text-custom-green'>رمز عبور</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className='border-b border-b-custom-green-56 w-full h-10 focus:outline-none text-right' />
            </span>
          </div>
          <Link to='/surveyes-list'><button type='submit' className=' w-32 h-12 mt-10 mb-44 rounded-lg bg-custom-green text-white text-base'>ورود</button></Link>
        </form>
      </div>
    </span>
  )
}
export default LoginPage
