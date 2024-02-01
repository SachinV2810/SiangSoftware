import { useEffect, useState } from 'react'
import Footer from './Footer'
import Maincontent from './Maincontent'
import Navbar from './Navbar'
import './profilepage.css'

const Profilepage = ({ userinfo, projects, courses }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/profile');
          const data = await response.json();
          setItems(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
     userinfo = {
        username: "Shobhit",
        branch: "Coumputer Science and Engineering",
        course: "Btech Engineering",
        yearofgrad: "2026",
        email: "shobhit25gupta@gmail.com",
        phone_no: "9873187481",
        linkedInprofile: "https://www.linkedin.com/in/shobhit-gupta25/",
        instaprofile: "https://www.instagram.com/shobyy.25/",
        githubprofile: "https://github.com/shobyy25",
        aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris vel urna ultrices, ac congue lacus condimentum. Integer nec elit eu metus ullamcorper bibendum. Nullam ullamcorper, urna eget condimentum fermentum, elit felis ultricies orci, vitae malesuada nulla dui in lacus."
      }
       projects = [
        { projname: "proj1", projinfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"] },
        { projname: "proj2", projinfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"] },
        { projname: "proj3", projinfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"] },
      ]
       courses = [
        { projname: "course1", courseinfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"] },
        { projname: "course2", courseinfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"] },
        { projname: "course3", courseinfo: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit. Sed euismod mauris vel urna ultrices"] },
      ]
    return (
        <>
            <Navbar/>
            <Maincontent userinfo={userinfo} courses={courses} projects={projects}/>
            <Footer />

        </>
    );
}

export default Profilepage;