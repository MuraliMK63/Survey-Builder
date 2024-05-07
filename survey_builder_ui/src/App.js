import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';



import Login from './modules/login/Login';
import SignIn from './modules/login/SignIn';
import SignUp from './modules/login/SignUp';

import AdminHome from './components/AdminHome';

import DashBoard from './modules/dashboard/DashBoard';
import Users from './modules/users/Users';
import Survey from './modules/survey/Survey';
import CreatorForm from './modules/survey/CreatorForm';
import SurveyBuilder from './modules/survey/SurveyBuilder';
import Category from './modules/category/Category';
import UserCreation from './modules/users/UserCreation';
import CategoryCreation from './modules/category/CategoryCreation';
import UserHome from './components/UserHome';
import AssignSurvey from './modules/survey/AssignSurvey';

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
        <Route path='users/*' >
          <Route path='' element={<Users />}></Route>
          <Route path='createUser' element={<UserCreation />}></Route>
        </Route>
        <Route path='category' >
          <Route path='' element={<Category />}></Route>
          <Route path='createCategory' element={<CategoryCreation />}></Route>
        </Route>
        <Route path='surveys/*'>
          <Route path='' element={<Survey />}></Route>
          <Route path='createSurvey/*' >
            <Route path='' element={<CreatorForm />}></Route> 
            <Route path=':id' element={<SurveyBuilder />}></Route>
          </Route>
          <Route path='assignSurvey' element={<AssignSurvey />}></Route>
        </Route>
      </Route>

      <Route path='user' element={<UserHome />}>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
