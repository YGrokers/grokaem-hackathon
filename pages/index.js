// TODO webpack import './index.css';

import Portfolio from "../components/Portfolio.js";
import Project from "../components/Project.js";
import {projects} from "../utils/constants.js";

const portfolio = new Portfolio({selector: '.portfolio'});
projects.forEach(projectData => {
  const project = new Project({templateSelector: ".project-template", ...projectData});
  portfolio.addProject(project.generateElement());
})
