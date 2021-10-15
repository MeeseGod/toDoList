import getProjects from "./projects";

function displayProjects(){
    let getProject = getProjects();
    console.log(getProject[0].projectName);
}

export default displayProjects;