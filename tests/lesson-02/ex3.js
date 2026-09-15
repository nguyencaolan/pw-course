const number = -1;
if (number > 0){
    console.log ("Giá trị bạn nhập là số dương");
}
else if (number < 0 ){
    console.log ("Giá trị bạn nhập là số âm");
}
else {
    console.log ("Giá trị bạn nhập là số 0");
}


const scores = [85, 92, 95, 100, 60, 80];
console.log ("Điểm >= 80");
for (let i = 0; i < scores.length; i++){
    const score = scores[i];
    if (score < 80){
        continue;
    }
     console.log(score);
}
   