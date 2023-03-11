import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function UserNavbar () {
  const path = useLocation().pathname
  const user = {}
  return (
    <div className=' bg-gray-200 items-center rounded-xl px-10 py-5 flex justify-between mx-7 my-10'>
        <div className='flex items-center'>
            <span className='flex items-center'>
                <img className=' rounded-full w-10 h-10' />
                <p className=' text-sm ml-3'>Welcome, {user.FullName}</p>
            </span>
            <p className=' text-custom-red ml-7'>خروج</p>
        </div>
        <div>
        <Link to='/' className={`text-custom-green text-xl ${path !== '/' && 'opacity-60'}`}>خانه</Link>
            <Link to='surveyes-list' className={`text-custom-green text-xl mx-7  ${path !== 'surveyes-list' && 'opacity-60'}`}>لیست نظر سنجی ها</Link>
        </div>
    </div>
  )
}
export default UserNavbar