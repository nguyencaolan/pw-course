function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
console.log(multiply(4, 5));

function findMin(a, b, c) {
    // tìm số nhỏ nhất trong 3 số
    if (a <= b && a <= c)  // a nhỏ nhất
        return a;
    else if (b <= a && b <= c) //b nhỏ nhất
        return b;
    else
        return c;
}

console.log(findMin(3, 3, 5));
console.log(findMin(11, 11, 2000));




const std = [
    { name: "Lan", score:8},
    { name: "An", score: 1}
];

function getTopStudents(students, threshold) {
    const topStudents = []; // tạo 1 mảng trống để push vô
    for (let i = 0; i < students.length; i++) { 
        if (students[i].score >= threshold) { 
            topStudents.push(students[i].name); // sau khi duyệt qua vòng lặp for, lấy những students có score >= threshold nhét vô lại topStudents

        }


    }
    return topStudents;
}

console.log(getTopStudents(std, 8));

// làm thêm: tương tự bài trên, lấy ra tên nhân viên có lương >=1800
const employees1 = [
    { name: "An", salary: 1200 },
    { name: "Lan", salary: 2500 },
    { name: "Nam", salary: 1800 },
    { name: "Minh", salary: 3000 },
    { name: "Huy", salary: 1500 }
];
function getHighSalaryEmployees (employees, minSalary) {
    const result =[];
    for (let i = 0; i < employees.length; i++){
        if (employees[i].salary >= minSalary){
            result.push(employees[i].name);
        } 
    }
    return result;
}
console.log (getHighSalaryEmployees(employees1, 1800));

function calculateInterest (principal, rate,years){
    const total = principal + principal * rate * years / 100;
    return total;
}
console.log(calculateInterest(10000000, 5, 2));