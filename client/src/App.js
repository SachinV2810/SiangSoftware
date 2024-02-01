import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProfilePage from './Components/ProfilePage/Profilepage';

function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/login');
  // })
  const userinfo = {};
  const courses = [];
  const projects = [];
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/myprofile' element={<ProfilePage userinfo={userinfo} courses={courses} projects={projects}/>}></Route>
          {/* <Route path="/myProfile/projects" component={Projects} />
          <Route path="/myProfile/courses" component={Courses} />
          <Route path="/myProfile/logout" component={Logout} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
