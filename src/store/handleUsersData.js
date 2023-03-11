import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    {
      Id: 41,
      Username: 'کاربر',
      Password: 'kjdkjf',
      FullName: 'کاربر 45',
      PhoneNumber: '09155555555555',
      Address: 'address',
      CreatedDate: new Date(),
      IsAdmin: false
    }, {
      Id: 54,
      Username: 'کاربر',
      Password: 'kjdkjf',
      FullName: 'کاربر 45',
      PhoneNumber: '09155555555555',
      Address: 'address',
      CreatedDate: new Date(),
      IsAdmin: true
    }, {
      Id: 61,
      Username: 'کاربر',
      Password: 'kjdkjf',
      FullName: 'کاربر 45',
      PhoneNumber: '09155555555555',
      Address: 'address',
      CreatedDate: new Date(),
      IsAdmin: false
    }
  ]
}

export const handleUsersDataSlice = createSlice({
  name: 'handleSurveyesData',
  initialState,
  reducers: {
    getData: (state, actions) => {
      return state
    },
    deleteUser: (state, actions) => {
      return state
    },
    addUser: (state, actions) => {
      return state
    },
    editUser: (state, actions) => {
      return state
    }
  }
})

export const { getData, deleteUser, addUser, editUser } = handleUsersDataSlice.actions
export default handleUsersDataSlice.reducer
