import "./Projecthead.css";

let statusMessage = "Completed";

const Projecthead = (project) => {
  if (project.Status === 1) {
    statusMessage = "Ongoing";
  }

  return (
    <div class="projectHead">
      <div class="projectAuthor">
        <span class="projectName"> {project.Name}</span>
        <span class="projectType"> {"- " + project.Type}</span>
      </div>
      <div class="projectStatus">{statusMessage}</div>
    </div>
  );
};

export default Projecthead;
