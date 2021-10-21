import project from "./projects";

const display = (() => {
    const displayProjects = () => {
        document.getElementById('projects').innerHTML = '';
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

    const displayTasks = (indexNumber) => {
        const getProject = project.getProjects();
        document.getElementById('toDoContainer').innerHTML = "";
        const tasksContainer = document.createElement('div');
        tasksContainer.setAttribute('id', 'tasksContainer');
        document.getElementById('toDoContainer').appendChild(tasksContainer);
        for(let i = 0; i < getProject[indexNumber].tasks.length; i++){
            let taskDiv = document.createElement('div');
            taskDiv.setAttribute('id', `project${indexNumber}task${i}`);
            taskDiv.setAttribute('class', 'taskDiv');
            taskDiv.innerHTML = getProject[indexNumber].tasks[i];
            document.getElementById('tasksContainer').appendChild(taskDiv);
        }
    };

    const displayProjectCreationForm = (input) => {
        if (input == 'Display'){
            document.getElementById('projectCreationContainer').style.display = 'block';
        }
        else if(input == 'Hide'){
            document.getElementById('projectCreationContainer').style.display = 'none';
        }
    }

    const displayTaskCreationForm = (input) => {

    }

    return {displayTasks, displayProjects, displayProjectCreationForm};
})();

export default display