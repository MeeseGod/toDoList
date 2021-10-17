import project from "./projects";

const display = (() => {
    const displayProjects = () => {
        const getProject = project.getProjects();
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

    const displayTasks = (indexNumber) =>{
        const getProject = project.getProjects();
        document.getElementById('toDoContainer').innerHTML = "";
        for(let i = 0; i < getProject[indexNumber].tasks.length; i++){
            let taskDiv = document.createElement('div');
            taskDiv.setAttribute('id', `project${indexNumber}task${i}`);
            taskDiv.setAttribute('class', 'taskDiv');
            taskDiv.innerHTML = getProject[indexNumber].tasks[i];
            document.getElementById('toDoContainer').appendChild(taskDiv);
        }
    };

    return {displayTasks, displayProjects};
})();

export default display