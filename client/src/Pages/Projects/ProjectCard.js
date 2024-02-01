import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Project.css'

export default function ProjectCard({project}) {
  return (
    <Card sx={{maxWidth: 345}} className='projectCard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt="project Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.projectName}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {project.projectInfo}
          </Typography>
          <p><b>Total reviews</b>  {project.reviews}</p>
          <div variant="body2" className='projectTechused' color="text.secondary">
            {project.techUsed.map((tech)=><p key={Math.random()}>&#x2022;  {tech}</p>)}
          </div>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}








// export default function ProjectCard({project}){
//     return(
//     <>
//     <h1>{project.projectName}</h1>
//     </>
//     )
// }