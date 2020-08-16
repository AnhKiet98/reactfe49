// var f_initBranch = function () {
//     console.log('Hello')
// }
// console.log(123)
// //khai bao bien
// // var ho tro hoisting
// var number = 1;
// var number = 2;
// // let number = 3;
// console.log(number);
// //let khong ho tro hosting
// title = 'sysbersoft';
// let title = 'adsad';
// pham vi hoat dong cua bien var va let
//var phamj vi trong toan scope,left hoat dong tren tung scope
// let i = 10;
// {
//     // var i = 20;
//     console.log(i);
// }
// console.log(i);
// //khai bao const
// const pi = 3.14;
// const objectAjax = {
//     url: "http://cybersoft.edu.vn",
//     method: 'GET'
// }
// objectAjax.url = "http://fb.com";
// objectAjax.method = "POST";
// console.log(objectAjax);
// var b = objectAjax;
// const arr = [1, 2, 3, 4];
// arr.push(5);
// console.log(arr);
//---------------------------------ARROW FUNTION------------------------------//
//khong the khai bao lop doi tuong prototype=arrow function
// let hello = function (name) {
//     return 'hello' + name;
// }
// console.log(hello('cc'));
// let hello__es6 = (name) => { 'hello' + name; }
let hocVien = {
    hoten: 'Nguyen Văn A',
    lop: 'frontend',
    laythongtinsinhvien: function () {
        let HienThiThongTin = () => {
            console.log(`Ho Ten: ${this.hoten} - Lop: ${this.lop}`);
        }
        HienThiThongTin();
    }
}
hocVien.laythongtinsinhvien();
//------------------REST param----------------
// var TinhTong = (a, b, c) => {
//     return a + b + c;
// }
// var TinhTong = (a, b) => {
//     return a + b;
// }


var TinhTong = function (...restParam) {
    switch (restParam.length) {
        case 2: {
            return restParam[0] + restParam[1];
        }
        case 3: {
            return restParam[0] + restParam[1] + restParam[2];
        } default: {
            return 'Tham SO Khong Hop Le';
        }
    }
}
var tong1 = TinhTong(1, 2);
var tong2 = TinhTong(1, 2, 3);
console.log('Tong', tong1);
console.log('Tong', tong2);
//so khong bị thay doi nhung object vs arry lại bi
let number1 = 5;
let number2 = 10;
number2 = number1;
number2 = 20;
console.log('Tong', number1);
console.log('Tong', number2);
//object
let hocvien1 = { hoten: 'NGuyen Van A' };
let hocvien2 = { ...hocvien1, lop: 'front end 19' };
hocvien2.hoten = 'Nguyen Thi B';
let hocvien3 = { ...hocvien1, hoten: 'NGuyen Van C' };//Vua copy vua thay doi thuoc tinh khỎi cần chấm cc gì hết.
console.log(hocvien1);
console.log(hocvien2);
console.log(hocvien3);
//sao chép giá trị array
let arrNum1 = [1, 2, 3, 4];
let arrNum2 = [...arrNum1, 5];
console.log(arrNum1);
console.log(arrNum2);
//--------------dèault param------------
//khong truyen thi lau mac dinh
//truyen thi lay gia trij dc truyen vao
var hienthithongtinNguoiDung = (hoten = 'Man', namsinh = 1999, tuoi = 2020 - namsinh) => {
    console.log('hoten', hoten);
    console.log('tuoi', tuoi);
}
hienthithongtinNguoiDung('Tay', 1998, 23);
//------------------destructuring----------------
let hocvienCyber = {
    id: 1,
    hoten: 'Yeu Dai Gia',
    thongtincanhan: {
        email: 'miss my ex',
        pw: '123456'
    },
    hienthithongtin: function () {
        console.log('hoten', this.hoten);
        console.log('id', this.id);

    }
}
//truy xuat cua es5
// let id = hocvienCyber.id;
// let hoten = hocvienCyber.hoten;
//truy xuat thong qua es6
//bóc tách phương thức mặc định không hiểu kiểu this-> muốn sử dụng thương thức this thì phải dùng bind
let { id, hoten, thongtincanhan, hienthithongtin } = hocvienCyber;
hienthithongtin.bind(hocvienCyber)();
//--------------strings template----------------
const showmessage = (name) => `hi ${name}`;
showmessage('Man Cong Tu');
//-----------------object literals---------chân phương----------
//khai bao thuoc tinh dong cho object
let thongtinclass = {
    ['id']: 49,
    ['tenlop']: 'fe49',
}
console.log(thongtinclass);
//gan nhanh gia tri cho thuoc tinh
//tu ten bien tao ra ten thuoc tinh dong thoi gan gia tri do cho thuoc tinh cua object
let id_ = 1;
let hoten_ = 'Anh A';
let hienthithongtinhocvien = function (HoTen) {
    console.log('Ho Ten', HoTen);
}
let hvfe49 = {
    id_,
    hoten_,
    hienthithongtinhocvien
}
console.log(hvfe49);
let mangSanPham = [
    { id: 1, tenSP: 'iphone XSmax', gia: 100 },
    { id: 2, tenSP: 'iphone XS', gia: 300 },
    { id: 3, tenSP: 'iphone X', gia: 1200 }

]
//for es5
for (let i = 0; i < mangSanPham.length; i++) {
    let sanPham = mangSanPham[i];
    console.log(sanPham);
}
//for es6

console.log('for in');
for (let index in mangSanPham) {
    let sanPham = mangSanPham[index];
    console.log(sanPham);
}

console.log('for off');
for (let sanPham in mangSanPham) {
    console.log(sanPham);
}
//doi voi object //for in dung de duyet object
//for off dung de duyet mang
let obdanhsachsp = {
    'dsadsadsad': { id: 1, tenSP: 'iphone XSmax', gia: 100 },
    'asdsafavava23': { id: 2, tenSP: 'iphone XS', gia: 300 },
    '548464646': { id: 3, tenSP: 'iphone X', gia: 1200 }
}
obdanhsachsp[548464646];
console.log('for in');
for (let key in obdanhsachsp) {
    let sanPham = obdanhsachsp[key];
    console.log(sanPham);
}
// import { TruongPhong, NhanVien, domain } from './models/nhanvien.js';
import { TruongPhong, domain } from './models/nhanvien.js';

import NhanVien123 from './models/nhanvien.js';

let nv = new NhanVien123(456, 'cccccccccc')
nv.HienThiThongTinNhanVien();

let sinhVienA = new SinhVienES6(1, 'abc');
sinhVienA.HienThiThongTinSV();

let tp = new TruongPhong(1, 'xyz', [1, 3, 2]);
tp.HienThiThongTinNhanVien();

let nvuu = new NhanVien123(2, 'Yeu dai gia');
nvuu.HienThiThongTinNhanVien();
console.log(domain);