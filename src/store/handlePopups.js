import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  popupState: 'none'
}

export const handlePopupsSlice = createSlice({
  name: 'handlepopups',
  initialState,
  reducers: {
    toggle: (state, actions) => {
      state.popupState = actions.payload
      return state
    }
  }
})

export const { toggle } = handlePopupsSlice.actions
export default handlePopupsSlice.reducer
