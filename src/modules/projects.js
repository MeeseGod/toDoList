let projects = [
    {
        projectName : "Test Project",
        dueDate : new Date(2021, 12, 12),
        tasks : [],
        description :   "This project was created in line"
    }
]

const project = (() => {
    class createProjects{
        constructor(projectName, dueDate, tasks, description){
            this.projectName = projectName;
            this.dueDate = dueDate;
            this.tasks = tasks;
            this.description = description;
        }
    }

    const testCreation = (name, date, tasks) => {
        let date1 = new Date("2021-10-16");
        let newProject = new createProjects("New Project", date1, ["Succeed"], "This is a projected created using a constructor");
        projects.push(newProject);
    }

    const updateProjectTasks = (tasks) => {
        projects[0].tasks.push(tasks)
        projects[0].tasks.push("Testing");
    }

    const getTasks = () => {};

    const getProjects = () => {
        testCreation();
        updateProjectTasks("Complete this project");
        console.log(projects);
        return projects;
    }

    return {getProjects}
})()

export default project;