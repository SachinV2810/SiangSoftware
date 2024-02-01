import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './courses.css'
export default function CourseCard({course}){
    return(
        <div className='courseCard'>
            <div className='cardHead'>
                <h5>{course.courseName}</h5>
                <Typography >{course.from}</Typography>
            </div>
            <div>
                <Typography component="legend">&nbsp;Course Rating </Typography>
                <div className='rating'>{course.rating}<Rating sx={{color:"#FFFF00"}}defaultValue={course.rating} precision={0.5} readOnly/></div>
            </div>
            <div>
                <a href={course.link}>Click to view Course</a>
            </div>

        </div>

    )
}




