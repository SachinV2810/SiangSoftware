
import AllProjects from "./AllProjects";
import * as React from 'react';
import { Button } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { styled, lighten, darken } from '@mui/system';
import './Project.css'


export default function ProjectPage({projects}){





let techUsed=[];
let projectType=[];
projects.map((project)=>projectType.push(project.projectType));
projects.map((project)=>project.techUsed.map((item)=>techUsed.push(item)));
techUsed=[...new Set(techUsed)];
projectType=[... new Set(projectType)];


const categories = [
  {
    title: 'Tech Stack',
    options: techUsed
  },
  {
    title: 'Project Type',
    options: projectType
  }
];


let [inputValue,setInputValue]=React.useState('');
let [newProject,setNewProject]=React.useState(projects);
const [sortValue, setValue] = React.useState('');
 const handleChange = (event) => {
    setValue(event.target.value);
  };


React.useEffect(()=>{

  if(sortValue==='popular'){
    const sortedItems = [...newProject].sort((a, b) => a.reviews - b.reviews);
    setNewProject(sortedItems.reverse());
    
  }
  if(sortValue==='date'){
    const sortedItems = [...newProject].sort((a, b) => b.dateModified - a.dateModified);
    setNewProject(sortedItems);
  }

},[sortValue]);



let handleSubmit=(e)=>{
    e.preventDefault();
     let arr=[];
     setValue('');
    if(inputValue){
    projects.map((project)=>{
      if(techUsed.find((item)=>item===inputValue)){
      let indexOf = (arr, q) => arr.findIndex(item => q.toLowerCase() === item.toLowerCase());
        if(indexOf(project.techUsed,inputValue)!==-1){
            arr.push(project)
        }
    }
    if(project.projectType===inputValue){
      arr.push(project);
      
    }
    })
    }

    if(arr.length){
      setNewProject(arr)
    }
   


}

React.useEffect(()=>{
  setNewProject(projects);
  setValue('');
},[inputValue])



  return(
    <>
        <div className="searchBar">
            <form onSubmit={handleSubmit} className="Searchform">

                <Autocomplete
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    options={categories.reduce((acc, curr) => [...acc, ...curr.options], [])}
                    groupBy={(option) => {
                      const category = categories.find(cat => cat.options.includes(option));
                      return category ? category.title : '';
                    }}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                        <div className="Searchinput" ref={params.InputProps.ref}>
                          <input placeholder="Search projects" type="text" {...params.inputProps} />
                        </div>
                      )}
                    renderOption={(props, option) => (
                      <li {...props}>
                        {option}
                      </li>
                    )}
          />

               <Button className="searchButton" color="primary" type="submit">Search</Button> 
        </form>
           
        </div>
            <br/>
            
            <div className="projectStyle">
               {/* {inputValue && newProject.length?<p>Showing results for {inputValue} </p>:<p>Showing all Projects</p>} */}
            </div>
                  <Box sx={{ maxWidth: 140 ,marginLeft:"30px",marginTop:"20px"}}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={sortValue}
                          label="Sort By"
                          onChange={handleChange}
                        >
                          <MenuItem value={"date"}>Date Modified &nbsp;<ArrowUpwardIcon sx={{fontSize:"17px"}}/>Latest</MenuItem>
                          <MenuItem value={"popular"}>Reviews &nbsp;<ArrowUpwardIcon sx={{fontSize:"17px"}}/>Popular</MenuItem>
                        </Select>
                      </FormControl>
                  </Box>

            <AllProjects projects={newProject.length?newProject:projects}/>
            
        </>
    )
}