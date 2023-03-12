import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  surveyes: [
    {
      Id: 12,
      Title: 'نظرسنجی 1',
      Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
      StartDate: new Date(2023, 11, 3),
      EndDate: new Date(2023, 11, 4),
      CreatedDate: new Date(),
      Questions: [
        {
          Id: 12,
          SurveyId: 12,
          Title: 'از عملکرد سایت چقدر راضی هستید ؟',
          Options: [
            {
              Id: 13,
              QuestionId: 12,
              Title: 'کم',
              IsCorrect: false
            }, {
              Id: 12,
              QuestionId: 12,
              Title: 'زیاد',
              IsCorrect: true
            }, {
              Id: 14,
              QuestionId: 12,
              Title: 'متوسط',
              IsCorrect: false
            }, {
              Id: 15,
              QuestionId: 12,
              Title: 'خیلی زیاد',
              IsCorrect: false
            }
          ]
        }
      ]
    }, {
      Id: 14,
      Title: 'نظرسنجی 1',
      Description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
      StartDate: new Date(2023, 11, 3),
      EndDate: new Date(2023, 11, 4),
      CreatedDate: new Date(),
      Questions: [
        {
          Id: 12,
          SurveyId: 12,
          Title: 'از عملکرد سایت چقدر راضی هستید ؟',
          Options: [
            {
              Id: 13,
              QuestionId: 12,
              Title: 'کم',
              IsCorrect: false
            }, {
              Id: 12,
              QuestionId: 12,
              Title: 'زیاد',
              IsCorrect: true
            }, {
              Id: 14,
              QuestionId: 12,
              Title: 'متوسط',
              IsCorrect: false
            }, {
              Id: 15,
              QuestionId: 12,
              Title: 'خیلی زیاد',
              IsCorrect: false
            }
          ]
        }
      ]
    }
  ]
}

export const handleSurveyesDataSlice = createSlice({
  name: 'handleSurveyesData',
  initialState,
  reducers: {
    getData: (state, actions) => {
      return state
    },
    deleteSurvey: (state, actions) => {
      return state
    },
    addSurvey: (state, actions) => {
      return state
    },
    editSurvey: (state, actions) => {
      return state
    },
    addQuestion: (state, actions) => {
      return state
    },
    deleteQuestion: (state, actions) => {
      return state
    },
    editQuestion: (state, actions) => {
      return state
    }
  }
})

export const { getData, deleteSurvey, addSurvey, editSurvey, addQuestion, deleteQuestion, editQuestion } = handleSurveyesDataSlice.actions
export default handleSurveyesDataSlice.reducer
