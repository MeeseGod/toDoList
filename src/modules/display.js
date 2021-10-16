import getProjects from "./projects";

function displayProjects(){
    let getProject = getProjects();
    console.log(getProject[0].projectName);
    console.log(getProject.length);

    for(let i = 0; i < getProject.length; i++){
        let createProjectDiv = document.createElement('div');
        createProjectDiv.setAttribute('id', `projectDiv${i}`);
        createProjectDiv.setAttribute('class', `projectDivs`);
        let displayProjectName = document.createElement('p');
        displayProjectName.textContent = `${getProject[0].projectName}`;
        document.getElementById('projects').appendChild(createProjectDiv);
        document.getElementById(`projectDiv${i}`).appendChild(displayProjectName);
    }
}

export default displayProjects;