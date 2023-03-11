import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const AdminSurveyesListPage = lazy(() => import('./pages/AdminSurveyesListPage'))
const AdminNavbar = lazy(() => import('./components/navbar/AdminNavbar'))
const SurveyPage = lazy(() => import('./pages/SurveyPage'))
const SurveySettingPage = lazy(() => import('./pages/SurveySettingPage'))
const AddSurveyPopup = lazy(() => import('./components/popups/AddSurveyPopup'))
const AddQuestionPopup = lazy(() => import('./components/popups/AddQuestionPopup'))
const EditQuestionPopup = lazy(() => import('./components/popups/EditQuestionPopup'))
const AddUserPopup = lazy(() => import('./components/popups/AddUserPopup'))
const EditUserPopup = lazy(() => import('./components/popups/EditUserPopup'))
const UsersListPage = lazy(() => import('./pages/UsersListPage'))

function App () {
  const popupState = useSelector((state) => state.handlePopup.popupState)
  return (
    <div className={`App h-full w-full font-vazirmatn ${popupState !== 'none' && ' overflow-hidden h-screen'}`}>
      <Suspense fallback={<></>}>
        <AdminNavbar />
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/surveyes-list' element={<AdminSurveyesListPage />}></Route>
          <Route path='/surveyes-list/survey/:id' element={<SurveyPage />}></Route>
          <Route path='/surveyes-list/survey/:id/setting' element={<SurveySettingPage />}></Route>
          <Route path='/users-list' element={<UsersListPage />}></Route>
        </Routes>
        {popupState === 'addQuestion' && <AddQuestionPopup />}
        {popupState === 'editQuestion' && <EditQuestionPopup />}
        {popupState === 'addSurvey' && <AddSurveyPopup />}
        {popupState === 'addUser' && <AddUserPopup />}
        {popupState === 'editUser' && <EditUserPopup />}
      </Suspense>
    </div>
  )
}

export default App
