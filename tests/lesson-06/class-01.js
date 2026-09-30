class student {
    constructor (Name, ClassCode, Address, test1Grade, test2Grade){
        this.Name = Name;
        this. ClassCode = ClassCode;
        this.Address= Address;
        this.test1Grade = test1Grade;
        this.test2Grade = test2Grade;

    }
}
const student1 = new student ("Rubby", 101, "HCM", 8, 9);
const student2 = new student ("John", 202, "HCM", 10, 9);
const student3 = new student ("Mary", 303, "Ha Noi", 1, 2);

console.log (student1);
console.log (student2);
console.log (student3);