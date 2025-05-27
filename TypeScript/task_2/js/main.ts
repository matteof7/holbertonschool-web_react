interface DirectorInterface {
    workFromHome: string;
    getCoffeBreak: string;
    workDirectorTasks: string;
}
interface TeacherInterface {
    workFromHome: string;
    getCoffeBreak: string;
    workTeacherTasks: string;
}
class Director implements DirectorInterface {
    workFromHome: string;
    getCoffeBreak: string;
    workDirectorTasks: string;

    constructor() {
        this.workFromHome = "Working from home";
        this.getCoffeBreak = "Getting a coffee break";
        this.workDirectorTasks = "Getting to director tasks";
    }
}
class Teacher implements TeacherInterface {
    workFromHome: string;
    getCoffeBreak: string;
    workTeacherTasks: string;

    constructor() {
        this.workFromHome = "Cannot work from home";
        this.getCoffeBreak = "Cannot have a break";
        this.workTeacherTasks = "Getting to work";
    }
}
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

function isDirector  (employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}
function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks);
    } else {
        console.log(employee.workTeacherTasks);
    }
}
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks