let projects = [
    {
        projectName : "Test Project",
        dueDate : new Date(2021, 12, 12),
        tasks : []
    }
]

let testTask = "Complete this!";

class createProjects{
    constructor(projectName, dueDate, tasks){
        this.projectName = projectName;
        this.dueDate = dueDate;
        this.tasks = tasks;
    }
}

function testCreation(name, date, tasks){
    let newProject = new createProjects("New Project", new Date(2021, 12, 12), {})
    projects.push(newProject);
}

function updateProjectTasks(tasks){
    projects[0].tasks.push(tasks)
    projects[0].tasks.push("Testing");
}

function callConstructor(){
    console.log("Create Project");
}

function getProjects(){
    testCreation();
    updateProjectTasks(testTask);
    console.log(projects);
    return projects;
}

export default getProjects;