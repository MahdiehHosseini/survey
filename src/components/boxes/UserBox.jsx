import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteUser } from './../../store/handleUsersData'
import { toggle } from './../../store/handlePopups'

function UserSurveyesListPage ({ user }) {
  const dispatch = useDispatch()
  return (
        <div className='flex justify-between items-center my-5 border border-gray-100 rounded-3xl mr-20 float-right shadow-lg bg-white shadow-gray-200 p-6 w-3/4'>
            <span className='flex'>
                <button onClick={() => dispatch(deleteUser(user.Id))}><i className=' material-icons text-3xl text-custom-red px-2 py-1 rounded-md border border-custom-red'>delete</i></button>
                <button onClick={() => dispatch(toggle('editUser'))}><i className=' material-icons ml-3 text-3xl text-custom-green px-2 py-1 rounded-lg border border-custom-green'>edit</i></button>
            </span>
            <p className=' text-custom-green text-lg'>اداره گاز اصفهان</p>
            <span className='flex items-center'>
                <h6 className=' text-custom-green text-lg'>{user.FullName}</h6>
                <img className='ml-5 rounded-full h-9 w-9' src='' />
            </span>
        </div>
  )
}
export default UserSurveyesListPage
