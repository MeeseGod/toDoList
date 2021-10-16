import getProjects from "./modules/projects"
import displayProjects from "./modules/display"

document.getElementById('addProject').addEventListener('click', function(){
    document.getElementById('projectCreationContainer').style.display = 'block';
})

document.getElementById('cancelProjectCreation').addEventListener('click', function(){
    document.getElementById('projectCreationContainer').style.display = 'none';
})

// console.log(getProjects());
displayProjects();