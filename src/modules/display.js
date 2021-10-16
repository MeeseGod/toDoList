import getProjects from "./projects";

function displayProjects(){
    let getProject = getProjects();

    for(let i = 0; i < getProject.length; i++){
        let createProjectDiv = document.createElement('div');
        createProjectDiv.setAttribute('id', `projectDiv${i}`);
        createProjectDiv.setAttribute('class', `projectDivs`);
        let displayProjectName = document.createElement('p');
        displayProjectName.textContent = `Project: ${getProject[i].projectName}`;
        document.getElementById('projects').appendChild(createProjectDiv);
        document.getElementById(`projectDiv${i}`).appendChild(displayProjectName);
    }
}

function displayTasks(index){
    console.log("Displaying tasks");
}

// export default displayProjects;

export {displayProjects, displayTasks}