import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard"
export default function AllProjects({projects}){

      const ProjectList=projects.map((project)=>
        <ProjectCard key={project.id} project={project}/>
    )
    return(
        
        <div style={{display:"flex",flexWrap:"wrap",padding:"10px", margin:"0 15px 0 15px"}}>
            {ProjectList}
        </div>
    )
}