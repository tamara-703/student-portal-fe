import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import Profile from './pages/Profile';
import RegisterCourse from './pages/RegisterCourse';
import ErrorPage from './pages/ErrorPage';
import Nav from './components/Nav'
import EditTemplate from './pages/EditTemplate';

function App() {
  return (
    <div className="App">

      <Nav />

      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/student/profile' element={<Profile />}></Route>
        <Route path='/student/register' element={<RegisterCourse />}></Route>
        <Route path='/student/:id/edit' element={<EditTemplate />}></Route>
        <Route path='/*' element={<ErrorPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
