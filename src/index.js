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

// To Do --------------------------------------------------------------------------------

//     DONE - Make a button to create a new project
            // DONE - Due dates are mandatory
                // Projects should be changeable after creation via an edit project button


//     DONE-  Make a button to create new tasks that is only visible when a project is selected
//          // Tasks should be able to contain a due date either less than or equal to the project and a descriptor
                // Tasks should be changeable and removable via an edit button
                // Due dates are not mandatory

//      Display whether or not the project is late if the due date is met or not with a red/green coloring system
//          // Display whether or not a task is late with a red/green coloring system


//      Fix button positions!
            // Currently clearing innerhtml deletes buttons since they're within container
                // Fix this

// --------------------------------------------------------------------------------------




// Notes from last session:

    // DONE - Refactor checkInput in projects.js to account for and push tasks
        // DONE - Implement logic for above ^
        // Implement secondary check through a new function that returns true or false
            // Secondary check makes sure the task isn't due after the project due date or due before today's date
                // Simply check if task date is less than or equal to project date, it works ^ 


    // Set up proper task and project display
        // Set up an editable description display
            // Click event listener - Replaces p element with a textarea, submit text area to edit description, cancel to keep old description
        // Set up an editable task display
            // Task name + due date should be changeable
                // Task name - see event listener idea ^
                // Due date - Create a date element on click
        // Tasks and Projects should be removable
            // Add buttons for removing

    // 