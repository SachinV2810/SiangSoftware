import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProjectPage from './Pages/Projects/Projectpage'
import CoursePage from './Pages/courses/CoursesPage';
function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/login');
  // })
  let Projects=[{id:7,projectName:"Project 7",image:"https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['HTML','Javascript'],reviews:50,dateModified:new Date('2024-01-15'),projectType:"Web devlopment",collaboration:false,completed:true},

  {id:8,projectName:"Project 8",image:"https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['CSS','Javascript'],reviews:90,dateModified:new Date('2023-01-15'),projectType:"Game devlopment",collaboration:true,completed:false},
  
  {id:9,projectName:"Project 9",image:"https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['HTML','Javascript'],reviews:550,dateModified:new Date('2024-01-15'),projectType:"Block chain",collaboration:true,completed:false},

  {id:10,projectName:"Project 10",image:"https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['CSS','Javascript'],reviews:900,dateModified:new Date('2023-01-15'),projectType:"Block chain",collaboration:false,completed:true},
   {id:11,projectName:"Project 12",image:"https://thumbs.dreamstime.com/z/bridge-over-mississippi-river-2483015.jpg?ct=jpeg",projectInfo:["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"],techUsed:['CSS','Javascript'],reviews:900,dateModified:new Date('2023-01-15'),projectType:"Aeromodelin",collaboration:true,completed:true}
  ];

  let Courses=[{id:1,courseName:"C++ full course",from:"coding Ninja",link:"www.google.com",rating:4,online:true,college:false},
  {id:2,courseName:"Web dev full course",from:"coding Ninja",link:"www.google.com",rating:5,online:true,college:false},
  {id:3,courseName:"Web dev full cours",from:"coding Ninja",link:"www.google.com",rating:4.3,online:false,college:true} ]
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/myprofile/projects' element={<ProjectPage projects={Projects}/>}></Route>
          <Route exact path='/myprofile/courses' element={<CoursePage courses={Courses}/>}></Route>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
