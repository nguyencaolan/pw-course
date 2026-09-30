//code TS
class Student {
    name: string;
    classCode: string;
    address: string;
    test1Grade: number;
    test2Grade: number;
    truong: string;

    constructor (name: string, classCode: string, address: string, test1Grade: number, test2Grade: number, truong: string){
        this.name = name;
        this.classCode = classCode;
        this.address= address;
        this.test1Grade = test1Grade;
        this.test2Grade = test2Grade;
        this.truong = truong;
    }

    doiTruong (truongMoi: string){
        this.truong = truongMoi;
    }

};
const student111 = new Student ("Rubby", "L001", "HCM", 8, 9, "hoctest.com");
const student222 = new Student ("Mary", "L001", "HCM", 8, 9, "hoctest.com");
student111.doiTruong("PlayWright");
console.log (student111);
console.log (student222);
