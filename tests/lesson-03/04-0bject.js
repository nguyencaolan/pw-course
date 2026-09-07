const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(car.year);

const person = {
    name: "Rubby",
    address: {
        street: "Võ Văn Kiêt",
        city: "Hồ Chí Minh",
        country: "Việt Nam",
    }

};
console.log(person.address.street)
console.log(person.address.city)

const student = {
    name: "Rubby",
    grades: {
        math: 9,
        english: 8,
    }
};
console.log(`math: ${student.grades["math"]}`, `english: ${student.grades["english"]}`);

const setting = {
    volume: "high",
    brightness: "medium",

};
setting.volume = "low";
console.log(setting);

const bike = {};

bike["color"] = "yellow";
console.log (bike);

const employee = {
    name: "Xuka",
    age: "10",
};
delete employee.age;
console.log (employee);

const school = {
    classA: ["An", "Bình","Châu"],
    classB: ["Đào","Hương","Giang"],
};
console.log (school.classA[2]);
console.log (school.classB[2]);