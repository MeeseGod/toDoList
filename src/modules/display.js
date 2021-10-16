import getProjects from "./projects";

const display = (() => {
    const testModule = () => {console.log("Monkey")};

    const displayProjects = () => {
        const getProject = getProjects();
        for(let i = 0; i < getProject.length; i++){
            let createProjectDiv = document.createElement('div');
            createProjectDiv.setAttribute('id', `projectDiv${i}`);
            createProjectDiv.setAttribute('class', `projectDivs`);
            let displayProjectName = document.createElement('p');
            displayProjectName.textContent = `Project: ${getProject[i].projectName}`;
            document.getElementById('projects').appendChild(createProjectDiv);
            document.getElementById(`projectDiv${i}`).appendChild(displayProjectName);
        }
    };

    const displayTasks = () =>{
        console.log("Displaying tasks");
    };

    return {testModule, displayTasks, displayProjects};
})();

export default display