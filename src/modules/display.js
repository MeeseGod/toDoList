import project from "./projects"

const display = (() => {

    const displayProjects = () =>{
        const projectsContainer = document.getElementById('projects');
        projectsContainer.innerHTML = '';
            for(let i = 0; i < project.getProjects().length; i++){
                let newProjectDisplay = document.createElement('div');
                newProjectDisplay.setAttribute('id', `displayedProject${i}`);
                newProjectDisplay.setAttribute('class', 'displayedProjects');
                let newProjectNameDisplay = document.createElement('p');
                newProjectNameDisplay.textContent = project.getProjects()[i].projectName;
                newProjectDisplay.appendChild(newProjectNameDisplay);
                projectsContainer.appendChild(newProjectDisplay);
            };
            console.log(project.getProjects());
    };

    // Currently console logs the value returned from project.getActiveProject (see index.js and project.js)
    const displayCurrentProject = (currentProject) => {
        displayTasks(currentProject);
    }

    const displayTasks = (currentProject) => {
        document.getElementById('taskContainer').innerHTML = '';
        if(currentProject != ''){
            let projectDescriptionDiv = document.createElement('div');
            let projectDescriptionText = document.createElement('p');
            let breakLine = document.createElement('hr');

            projectDescriptionDiv.setAttribute('id', 'projectDescriptionDiv');
            projectDescriptionText.textContent = project.getActiveProject().description;
            projectDescriptionText.setAttribute('id', 'projectDescriptionText');
            breakLine.setAttribute('id', 'taskHr');

            document.getElementById('taskContainer').appendChild(projectDescriptionDiv);
            document.getElementById('taskContainer').appendChild(breakLine);
            document.getElementById('projectDescriptionDiv').appendChild(projectDescriptionText);

            if(currentProject.tasks.length == 0){
                let taskDiv = document.createElement('div');
                taskDiv.setAttribute('id', `noTaskDiv`);
                taskDiv.setAttribute('class', 'taskDiv');
                let taskDisplay = document.createElement('p');
                taskDisplay.textContent = "This project has no tasks";
                document.getElementById('taskContainer').appendChild(taskDiv);
                taskDiv.appendChild(taskDisplay);
            }
            else if(currentProject.tasks.length > 0){
                for(let i = 0; i < currentProject.tasks.length; i++){
                    let taskDiv = document.createElement('div');
                    taskDiv.setAttribute('id', `taskDiv${i}`);
                    taskDiv.setAttribute('class', 'taskDiv');
                    let taskDisplay = document.createElement('p');
                    taskDisplay.textContent = currentProject.tasks[i].taskName;
                    document.getElementById('taskContainer').appendChild(taskDiv);
                    taskDiv.appendChild(taskDisplay);
                }
            }
        }
    };

    const createFormContainer = (type) => {
        if(document.getElementById(`projectForm`) || document.getElementById(`taskForm`)){
            console.log('Form exists');
        }
        else{
            let formContainer = document.createElement('div');
            formContainer.setAttribute('id', `${type}Form`);
            document.body.appendChild(formContainer);
            fillForm(type);
        }
    };

    const fillForm = (type) =>{
        if(type == 'project'){
            let projectFormTitle = document.createElement('h1');
            let projectNameInput = document.createElement('input');
            let projectDateInput = document.createElement('input');

            projectFormTitle.textContent = 'Create a Project';
            projectFormTitle.setAttribute('id', 'projectFormTitle');
            projectFormTitle.setAttribute('class', 'formTitle');

            projectNameInput.setAttribute('type', 'text');
            projectNameInput.setAttribute('id', 'projectNameInput');
            projectNameInput.setAttribute('class', 'formInput');

            projectDateInput.setAttribute('type', 'date');
            projectDateInput.setAttribute('id', 'projectDateInput');
            projectDateInput.setAttribute('class', 'formInput');

            document.getElementById('projectForm').appendChild(projectFormTitle);
            document.getElementById('projectForm').appendChild(projectNameInput);
            document.getElementById('projectForm').appendChild(projectDateInput);
        }
        else if(type == 'task'){
            let taskFormTitle = document.createElement('h1');
            let taskNameInput = document.createElement('input');
            let taskDateInput = document.createElement('input');

            taskFormTitle.textContent = 'Create a Project';
            taskFormTitle.setAttribute('id', 'taskFormTitle');
            taskFormTitle.setAttribute('class', 'formTitle');

            taskNameInput.setAttribute('id', 'taskNameInput');
            taskNameInput.setAttribute('class', 'formInput');

            taskDateInput.setAttribute('type', 'date');
            taskDateInput.setAttribute('id', 'taskDateInput');
            taskDateInput.setAttribute('class', 'formInput');

            document.getElementById('taskForm').appendChild(taskFormTitle);
            document.getElementById('taskForm').appendChild(taskNameInput);
            document.getElementById('taskForm').appendChild(taskDateInput);
        }
        const submitButton = document.createElement('button');
        submitButton.setAttribute('id', 'submitForm');
        submitButton.innerText = 'Submit';
        document.getElementById(`${type}Form`).appendChild(submitButton);

        const closeButton = document.createElement('button');
        closeButton.setAttribute('id', 'closeForm');
        closeButton.innerText = 'Cancel';
        document.getElementById(`${type}Form`).appendChild(closeButton);
    };

    const removeTaskForm = () =>{
        document.getElementById('taskForm').remove();
    }

    const descriptionForm = () => {
        if(!document.getElementById('descriptionFormContainer')){
        let descriptionFormContainer = document.createElement('div');
        let descriptionFormTextArea = document.createElement('textarea');
        let descriptionFormSubmit = document.createElement('button');
        let descriptionFormCancel = document. createElement('button');

        descriptionFormContainer.setAttribute('id', 'descriptionFormContainer');
        descriptionFormTextArea.setAttribute('id', 'descriptionTextArea');
        descriptionFormSubmit.setAttribute('id', 'descriptionSubmit');
        descriptionFormCancel.setAttribute('id', 'descriptionCancel');


        document.body.append(descriptionFormContainer);
        document.getElementById('descriptionFormContainer').appendChild(descriptionFormTextArea);
        document.getElementById('descriptionFormContainer').appendChild(descriptionFormSubmit);
        document.getElementById('descriptionFormContainer').appendChild(descriptionFormCancel);
        }
    }

    return {displayProjects, displayCurrentProject, createFormContainer, removeTaskForm, descriptionForm};
})();

export default display