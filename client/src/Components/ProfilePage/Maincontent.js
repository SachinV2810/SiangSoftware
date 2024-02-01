
import insta_logo from './insta_logo.png'
import linkedIn_logo from './linkedIn_logo.png'
import github_logo from './github_logo.png'
import blank_profile_pic from './blank_profile_pic.webp'

const Maincontent = ({ userinfo, courses, projects }) => {
    return ( 
        <div class="profile-container">
                <div class="profile-left">
                    <img src={blank_profile_pic} alt="Profile Picture" class="profile-picture" />
                    <div class="user-name">{userinfo.username}</div>
                    <div class="branch">{userinfo.branch}</div>
                    <div class="course">{userinfo.course} {userinfo.yearofgrad}</div>

                    <div class="social-links">
                        <a href={userinfo.instaprofile} target="_blank"><img src={insta_logo} width="30" height="30" /></a>
                        <a href={userinfo.linkedInprofile} target="_blank"><img src={linkedIn_logo} width="30" height="30" /></a>
                        <a href={userinfo.githubprofile} target="_blank"><img src={github_logo} width="30" height="30" /></a>
                    </div>
                    <div class="contact-info">
                        <h3>Contact information</h3>
                        <p>Email: <a href="mailto:"{...userinfo.email} font-color= "black">{userinfo.email}</a></p>
                        <p>Phone: {userinfo.phone_no}</p>
                    </div>
                </div>
                <div className="profile-right">
                    <div className="about-me">
                        <h2>About Me</h2>
                        <p>{userinfo.aboutme}</p>

                    <div className="projects">
                        <h2>Projects</h2>
                        <ul>
                            {projects.map((project, index) => (
                                <div key={index}>
                                    <h3>{project.projname}</h3>
                                    {project.projinfo.map((info, index) => (
                                        <li key={index}>{info}</li>
                                    ))}

                                </div>
                            ))}
                        </ul>
                    </div>

                    </div>
                    <div className="courses">
                        <h2>Courses</h2>
                        <ul>
                            {courses.map((course, index) => (
                                <div key={index}>
                                    <h3>{course.projname}</h3>
                                    {course.courseinfo.map((info, index) => (
                                        <li key={index}>{info}</li>
                                    ))}

                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

                
            </div>
     );
}
 
export default Maincontent;