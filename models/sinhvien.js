//es5
var sinhvien = function () {
    this.masv = '';
    this.tensv = '';
    this.hienthithongtinsv = function () {
        console.log(`Ma sv ${this.masv} ten ${this.tensv}`);
    }
}
//-----------ES6-----------
class SinhVienES6 {
    maSV = '';
    tenSV = '';
    constructor(maSinhVien, tenSinhVien) {
        this.maSV = maSinhVien;
        this.tenSV = tenSinhVien;
    }
    HienThiThongTinSV() {
        console.log(`Ma sv ${this.maSV} ten ${this.tenSV}`);
    }
}