class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your fullname is ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a, b){return a+b});
        return sum/this.scores.length;
    }
    static EnrollStudents(){
        return "Enrolling Students";
    }
}

let firstStudent = new Student("Erkin", "Abdur", 1);
let secondStudent = new Student("Sagyn", "Abdu", 2);

console.log(firstStudent.firstName);
console.log(secondStudent.tardies);