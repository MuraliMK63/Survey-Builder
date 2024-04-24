import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';



import Login from './modules/login/Login';
import SignIn from './modules/login/SignIn';
import SignUp from './modules/login/SignUp';

import AdminHome from './components/AdminHome';

import DashBoard from './modules/dashboard/DashBoard';
import Users from './modules/users/Users';
import Survey from './modules/survey/Survey';
import SurveyCreator from './modules/survey/SurveyCreator';
import CreatorForm from './modules/survey/CreatorForm';
import SurveyBuilder from './modules/survey/SurveyBuilder';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Login />}>
        <Route path='' element={<SignIn />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
      </Route>
      <Route path='admin/*' element={<AdminHome />}>
        <Route path='' element={<DashBoard />}></Route>
        <Route path='users' element={<Users />}></Route>
        <Route path='surveys/*'>
          <Route path='' element={<Survey />}></Route>
          <Route path='createSurvey/*' element={<SurveyCreator />}>
            <Route path='' element={<CreatorForm />}></Route> 
            <Route path=':id' element={<SurveyBuilder />}></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
