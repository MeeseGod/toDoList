import getProjects from "./modules/projects"

document.getElementById('addProject').addEventListener('click', function(){
    document.getElementById('projectCreationContainer').style.display = 'block';
})

console.log(getProjects());