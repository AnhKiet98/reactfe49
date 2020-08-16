//  class NhanVien {
//     maNV = '';
//     tenNV = '';
//     constructor(MaNhanVien, TenNhanVien) {
//         this.maNV = MaNhanVien;
//         this.tenNV = TenNhanVien;
//     }
//     HienThiThongTinNhanVien() {
//         console.log(`MaNV ${this.maNV}   Ten ${this.tenNV}`);
//     }
// }
// export class TruongPhong extends NhanVien {
//     dsphongban;
//     constructor(MaNhanVien,TenNhanVien,dsphongban) {
//         super(MaNhanVien,TenNhanVien);
//         this.dsphongban=dsphongban;
//         // console.log(`dspb ${this.dsphongban}`);
//     }
//     HienThiThongTinNhanVien() {
//         super.HienThiThongTinNhanVien();
//         console.log(this.dsphongban);
//     }
// }
// export const domain='http://fb.com';
// //expoet default moi file chi export duoc 1 lan khi export tu default
// //thi khong co {} va co the sua ten dc
// export default NhanVien;