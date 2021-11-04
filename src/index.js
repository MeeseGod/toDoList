import display from "./modules/display";
import project from "./modules/projects";


// Testing functions 
project.checkInputValues('Created Test Project', new Date(2021, 1, 1), 'projectForm');
display.displayProjects();

// Initializer functions

    // Placeholder

// Event listeners
document.getElementById('addProject').addEventListener('click', function(){
    console.log("Bringing up project creation form");
    project.setFormTarget("project");
    display.createFormContainer('project');
})

document.getElementById('addTask').addEventListener('click', function(){
    console.log("Bringing up task creation form");
    project.setFormTarget("task");
    display.createFormContainer('task');
})

document.addEventListener('click', function(e){
    if(e.target.parentNode.className == 'displayedProjects'){
        let targetedProject = e.target.parentNode.id.replace('displayedProject', '');
        project.setProjectActive(targetedProject);
        display.displayCurrentProject(project.getActiveProject());
        document.getElementById('addTask').style.visibility = 'visible';
        if(document.getElementById('taskForm')){
            display.removeTaskForm();
        }
    };
    if(e.target.id == 'projects' || e.target.id == 'projectsContainer'){
        project.setProjectActive('');
        display.displayCurrentProject(project.getActiveProject())
        document.getElementById('addTask').style.visibility = 'hidden';
        if(document.getElementById('taskForm')){
            display.removeTaskForm();
        }
    }
})

//  Cancels Form and removes it from DOM
document.addEventListener('click', function(e){
    if(e.target.id == 'closeForm'){
        document.getElementById(e.target.parentNode.id).remove();
        project.setFormTarget('');
    }
});

// Submits form
document.addEventListener('click', function(e){
    if(e.target.id == 'submitForm'){
        let formInputs = document.getElementsByClassName('formInput');
        if(project.checkInputValues(formInputs[0].value, formInputs[1].value, formInputs[0].parentElement.id) == true){
            let formType = document.getElementById(e.target.parentNode.id);
            document.getElementById(e.target.parentNode.id).remove();
            project.setFormTarget('');
            console.log(e.target.parentNode.id);
            if(e.target.parentNode.id == 'projectForm'){
                display.displayProjects();
            }
            else if(e.target.parentNode.id == 'taskForm'){
                display.displayCurrentProject(project.getActiveProject());
            }
        }
    }
});

document.addEventListener('click', function(e){
    if(e.target.id == 'projectDescriptionDiv' || e.target.id == 'projectDescriptionText'){
        console.log("Project Desc");
        console.log(project.getActiveProject());
        display.descriptionForm();
    }
})

// To Do --------------------------------------------------------------------------------

    // Where we're at
        // We can add projects and tasks using buttons and forms
        // We can set names and due dates

    // What we need
        // We need to be able to edit task due dates and informations
        // We need to be able to edit the description of our project
        // We need to display the due date of our tasks and projects
        // We need to be able to remove tasks and projects

    // What we want
        // When clicking on the description, create a pop up with a text area, submit and close button
        // User can Submit a new description this way and cancel
    
        // When clicking on the due date, allow them to change it with a date input

        // Add a remove button when clicking on a task or project

