import { configureStore } from '@reduxjs/toolkit'

import handlePopupReducer from './handlePopups'
import handleSurveyesDataReducer from './handleSurveyesData'
import handleUsersDataReducer from './handleUsersData'

export const store = configureStore({
  reducer: {
    handlePopup: handlePopupReducer,
    handleSurveyesData: handleSurveyesDataReducer,
    handleUsersData: handleUsersDataReducer
  }
})
