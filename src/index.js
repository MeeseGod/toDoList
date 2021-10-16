import display from "./modules/display"

document.getElementById('addProject').addEventListener('click', function(){
    document.getElementById('projectCreationContainer').style.display = 'block';
})

document.getElementById('cancelProjectCreation').addEventListener('click', function(){
    document.getElementById('projectCreationContainer').style.display = 'none';
})

document.addEventListener("click", function(e){
    if(e.target.parentNode.className == 'projectDivs'){
        console.log(e.target.parentNode.id.replace("projectDiv", ""));
        display.displayTasks();
    }
})

display.testModule();
display.displayProjects();