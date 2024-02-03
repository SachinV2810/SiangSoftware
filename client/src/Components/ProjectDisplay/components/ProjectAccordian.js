import "./ProjectAccordian.css";

const ProjectAccordian = (project) => {
  return (
    <ul class="accordian">
      <li class="accordianHeading">
        <input type="checkbox" name="accordian" id="first" />
        <label for="first" class="contentHead">
          {" "}
          Discription
        </label>
        <div class="content">
          <p>{project.Discription}</p>
        </div>
      </li>
      <li class="accordianHeading">
        <input type="checkbox" name="accordian" id="second" />
        <label for="second" class="contentHead">
          {" "}
          Tech Stack
        </label>
        <div class="content">
          <ul>
            {project.TeckStack.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </li>
      <li class="accordianHeading">
        <input type="checkbox" name="accordian" id="third" />
        <label for="third" class="contentHead">
          {" "}
          Reviews
        </label>
        <div class="content">
          <ul>
            {project.Reviews.map((review) => (
              <li>{review}</li>
            ))}
          </ul>
        </div>
      </li>

      <li class="accordianHeading" projectStatus>
        <input type="checkbox" name="accordian" id="fourth" />
        <label for="fourth"> Skills Required</label>
        <div class="content">
          <ul>
            {project.SkillsReq.map((skills) => (
              <li>{skills}</li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default ProjectAccordian;
