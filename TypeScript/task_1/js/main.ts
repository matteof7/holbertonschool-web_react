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
