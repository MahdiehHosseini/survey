import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import UserBox from './../components/boxes/UserBox'

import { toggle } from './../store/handlePopups'

function AdminSurveyesListPage () {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.handleUsersData.users)
  return (
    <>
      <ul className='mt-10 mb-5 mr-20 flex justify-end'>
        <li>لیست کاربران</li>
      </ul>
      <div className='mb-40 flex relative'>
        <span className=''>
          <button onClick={() => dispatch(toggle('addUser'))} className=' text-white fixed bottom-20 left-20 bg-custom-green px-8  py-4 rounded-lg'>افزودن کاربر</button>
        </span>
        <span className='w-full'>
          {users.map(user => <UserBox key={user.Id} user={user} />)}
        </span>
      </div>
    </>
  )
}
export default AdminSurveyesListPage
