let projects = [
    {
        projectName : "Test Project",
        dueDate : new Date(2021, 12, 12),
        tasks : [],
        description :   "This project was created in line"
    }
]

class createProjects{
    constructor(projectName, dueDate, tasks, description){
        this.projectName = projectName;
        this.dueDate = dueDate;
        this.tasks = tasks;
        this.description = description;
    }
}

function testCreation(name, date, tasks){
    let date1 = new Date("2021-10-16");
    let newProject = new createProjects("New Project", date1, ["Succeed"], "This is a projected created using a constructor");
    projects.push(newProject);
}

function updateProjectTasks(tasks){
    projects[0].tasks.push(tasks)
    projects[0].tasks.push("Testing");
}

function getTasks(){
    console.log
}

function getProjects(){
    testCreation();
    updateProjectTasks("Complete this project");
    console.log(projects);
    return projects;
}

export default getProjects;