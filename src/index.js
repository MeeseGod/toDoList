import display from "./modules/display"
import project from "./modules/projects";
import testCreation from "./modules/projects"

document.getElementById('addProject').addEventListener('click', function(){
    document.getElementById('projectCreationContainer').style.display = 'block';
})

document.getElementById('cancelProjectCreation').addEventListener('click', function(){
    document.getElementById('projectCreationContainer').style.display = 'none';
})

document.addEventListener("click", function(e){
    if(e.target.parentNode.className == 'projectDivs'){
        let passingIndex = e.target.parentNode.id.replace("projectDiv", "")
        display.displayTasks(passingIndex);
    }
})

project.testCreation();
display.displayProjects();