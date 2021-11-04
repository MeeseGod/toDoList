let projects = [
    {
        projectName : "Test Project",
        dueDate : new Date(2021, 12, 12),
        tasks : [],
        description :   "[Description]"
    }
];

const project = (() => {

    let activeProject = '';
    let formTarget = '';

    class createProjects{
        constructor(projectName, dueDate, tasks, description){
            this.projectName = projectName;
            this.dueDate = dueDate;
            this.tasks = tasks;
            this.description = description;
        };
    };

    class createTasks{
        constructor(taskName, dueDate){
            this.taskName = taskName;
            this.dueDate = dueDate;
        };
    };


    const getProjects = () =>{
        return projects;
    };

    const getActiveProject = () => {
        return activeProject;
    }

    const setProjectActive = (input) => {
        if(activeProject != projects[input]){
            activeProject = projects[input];
        }
        if(input == ''){activeProject = ''};
        console.log(activeProject);
    }

    const setFormTarget = (type) => {
        if(!document.getElementById(`projectForm`) && !document.getElementById(`taskForm`)){
            if(formTarget != type){formTarget = type};
            console.log("Form target: " + formTarget);
        };
    };

    const checkInputValues = (Name, dueDate, type) =>{
            if(dueDate != '' && Name != ''){
                if(type == 'projectForm'){
                    createNewProject(Name, dueDate);
                }
                else if(type == 'taskForm'){
                    let inputDate = new Date(dueDate);
                    let projectDate = new Date(project.getActiveProject().dueDate);
                    if(inputDate < projectDate){
                        alert("Error - Task Due before Project")
                        return false;
                };
                    createNewTask(Name, dueDate);
                }
                return true;
            }
            else if(Name == ''){
                alert("Error - Invalid Project Name")
            }
            else if(dueDate == ''){
                alert("Error - Invalid Due Date")
            }
        return false;
    };

    const createNewProject = (projectName, dueDate) =>{
        let newProject = new createProjects(projectName, new Date(dueDate), [], '[Description]');
        projects.push(newProject);
        console.log(projects);
    };

    const createNewTask = (taskName, dueDate) => {
        let newTask = new createTasks(taskName, new Date(dueDate));
        activeProject.tasks.push(newTask);
        console.log(activeProject.tasks);
    }

    return {getActiveProject, getProjects, setProjectActive, setFormTarget, checkInputValues}
})();

export default project;