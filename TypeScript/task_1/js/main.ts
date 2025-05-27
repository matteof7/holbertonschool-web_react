interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fulltimeemployee: boolean;
    yearsofexperience: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fulltimeemployee: false,
    yearsofexperience: 0,
    location: "London",
    contract: false, 
};

console.log(teacher3);

interface Director extends Teacher {
    numberOfreports: number;
}

const director1: Director = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fulltimeemployee: true,
    numberOfreports: 17,
    yearsofexperience: 0
};

console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Alice", "Smith"));

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
const studentInstance: StudentClassInterface = new StudentClass("Alice", "Martin");
console.log(studentInstance.displayName());
console.log(studentInstance.workOnHomework());
