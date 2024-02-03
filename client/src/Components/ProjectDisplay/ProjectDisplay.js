import "./ProjectDisplay.css";
import ProjectCrousel from "./components/ProjectCrousel";
import Projecthead from "./components/Projecthead";
import ProjectAccordian from "./components/ProjectAccordian";

const ProjectDisplay = ({ project }) => {
  return (
    <div class="overlay">
      <div class="mainContent">
        <Projecthead {...project} />

        <ProjectCrousel {...project} />
        <ProjectAccordian {...project} />
      </div>
    </div>
  );
};

export default ProjectDisplay;
