let sum = 0;
for (let i = 1; i <=100; i++) {
 sum = sum + i;
}
console.log (sum);


// Bảng Cửu Chương thì :
// - chay 2 vòng lặp, 1 vòng ngoài từ 2 tới 9 (hay còn gọi là số bảng). Vòng lặp trong thì chạy từ 1 tới 10 (hay gọi là số nhân)
//- lấy bảng nhân * số nhân = kết quả

let multiply;
for(let i = 2; i<=9; i++) {
    for (let j =1; j <=9; j++){
        multiply = i * j;
        console.log (`${i} x ${j} = ${multiply}`);
    }
}
// Với tìm số lẻ thì phait tạo ra 1 mảng rỗng để chứa số lẻ
// duyệt qua vòng for, nếu !==0 thì mình bê nó bor vào mảng và in ra

const oddNumber = [];
for (let i = 1; i <= 99; i++){
    if (i %2 !== 0){
        oddNumber.push(i);
        
    }
}
console.log (oddNumber);

// Email thì duyệt qua for
// mình làm theo công thức (`user${i}@example.com`)

for (let i = 1; i <=10; i++){
    console.log (`user${i}@example.com`)
}

// Tính Tổng doanh thu

const doanhThu = [];
let tongDoanhThu = 0;
// tạo 12 objects và bê nó bỏ vô mảng trống mới tạo ở trên
for (let i = 1; i <= 12; i++) {
    doanhThu.push({month: i, total: i * 100});
}
console.log (doanhThu);
// duyệt qua mảng và lấy tổng doanh thu

for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu = tongDoanhThu + doanhThu[i].total;}
console.log (tongDoanhThu);