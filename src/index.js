import display from "./modules/display";
import project from "./modules/projects";

document.getElementById('addProject').addEventListener('click', function(){
    display.displayProjectCreationForm('Display');
});

document.getElementById('cancelProjectCreation').addEventListener('click', function(){
    display.displayProjectCreationForm('Hide');
});

document.addEventListener("click", function(e){
    if(e.target.parentNode.className == 'projectDivs'){
        let passingIndex = e.target.parentNode.id.replace("projectDiv", "")
        project.targetProjectIndex = passingIndex;
        display.displayTasks(passingIndex);
        console.log(project.targetProjectIndex);
    }
});

document.getElementById('submitProjectForm').addEventListener('click', function(){
    let formInputs = document.getElementsByClassName('projectInput');
    project.createProjectFromForm(formInputs[0].value, formInputs[1].value, [], formInputs[2].value);
    display.displayProjects();
    display.displayProjectCreationForm('Hide');
});

document.getElementById('taskCreationButton').addEventListener('click', function(){
    if(project.targetProjectIndex != ''){console.log("Project Selection")}
    else{console.log("Die idiot")};
    console.log("Creating Task");
});

project.testCreation();
display.displayProjects();

// To Do:

// - Place task creation and project creation buttons in correct place
// - Create task creation form
// - Auto select 0 index project
// - Create ability to rename projects
// - Implement task & description display properly
// - Create ability to change descriptions and tasks
// - Implement local storage

// Additional stuff

// - Look into google cloud storage w/ google account login