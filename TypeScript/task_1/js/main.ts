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
