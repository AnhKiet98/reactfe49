let mangSanPham = [
    { maSP: 1, tenSP: 'Sony Xperia XZ1', gia: 1550, hangSX: 'Sony' },
    { maSP: 2, tenSP: 'Bony Xperia XZ2', gia: 1750, hangSX: 'Sony' },
    { maSP: 3, tenSP: 'aony Xperia XZ Premium', gia: 1950, hangSX: 'Sony' },
    { maSP: 4, tenSP: 'Google Pixel 2', gia: 1750, hangSX: 'Google' },
    { maSP: 5, tenSP: 'Google Pixel 2 XL', gia: 1950, hangSX: 'Google' },
    { maSP: 6, tenSP: 'Samsung Galaxy Note 9', gia: 1750, hangSX: 'Samsung' },
    { maSP: 7, tenSP: 'Samsung Galaxy S10', gia: 1850, hangSX: 'Samsung' },
    { maSP: 8, tenSP: 'Samsung Galaxy S10 Plus', gia: 1950, hangSX: 'Samsung' },
];
//lay ra cac mang san pham co hang sx='sony';
// let MangDTSonny = [];
// for (let i = 0; i < mangSanPham.length; i++) {
//     let sp = mangSanPham[i];
//     if (sp.hangSX === 'Sony') {
//         MangDTSonny.push(sp);
//     }
// }
// console.log(MangDTSonny);
//fiter: tra ve ket qua la 1 mang ocn thoa dieu kien arrow function trong phuong thuc filter
// let MangDTSonny = [];
// let MangGiaSP = [];
// MangDTSonny = mangSanPham.filter(dt => dt.hangSX === 'Sony');
// MangGiaSP = mangSanPham.filter(sp => sp.gia > 1800);
// console.log(MangGiaSP);
//find() tim ra phan tu thoa dieu kien arrow function chi tra ve phan tu dau tien dc tim thay neu khong tim dc thi tra veundefine
// let dtMa7 = mangSanPham.find(ma => ma.maSP === 1)
// if (dtMa7) {
//     console.log(dtMa7);
// } else {
//     console.log('Khong Tim Thay');
// }
//findindex tuowng tu nhu find nhung khong tim thay thi tra ve -1

// let madt = mangSanPham.findIndex(ma => ma.maSP === 6)
// if (madt !== -1) {
//     mangSanPham.splice(madt, 1);
//     console.log(madt);
//     console.log(mangSanPham);
// } else {
//     console.log('Khong Tim Thay', madt);
// }
// //foreach: dùng thực hiện xử lý trên các phần tử của mảng trể về undefine
// mangSanPham.forEach((dt, madt) => {
//     console.log(`dt ${madt}`, dt);
// })

// let mangCardBS4 = mangSanPham.map((dt, index) => {
//     return `<div class="col-4">
//                 <div class="card-body">
//                     <h4 class="card-title">${dt.tenSP}</h4>
//                     <p class="card-title"> ${dt.gia}</p>
//                 </div>        
//             </div>`
// })
// console.log(mangCardBS4);
// mangCardBS4.forEach((divcardsp, index) => {
//     document.getElementById('dssp').innerHTML += divcardsp;
// })

//reduce tuong tu nhu map va foreach nhung lap qua n phan tu tra ve 1 gia tri
//vi du nhu tinh tong tien tat ca dien thoai
//tham so 1 : la call back function duyet qua N phan tu
// tham so 2 : la gia tri khoi dau cho tham so thu 1 cua callback
let TongtienDT = mangSanPham.reduce((tongtien, dt, index) => {
    return tongtien += dt.gia;
}, 0)
console.log(TongtienDT);


let contentHTML = mangSanPham.reduce((content, dt, index) => {
    return content += `<div class="col-4">
                            <div class="card-body">
                                <h4 class="card-title">${dt.tenSP}</h4>
                                <p class="card-title"> ${dt.gia}</p>
                            </div>        
                        </div>`
}, '')

document.getElementById('dssp').innerHTML = contentHTML;

let mangSortTheoTen = mangSanPham.sort((spsau, sptruocdo) => {
    let tenSPsau = spsau.tenSP.toLowerCase().trim();
    let tensptruocdo = sptruocdo.tenSP.toLowerCase().trim();
    if (tenSPsau > tensptruocdo) {
        return 1;// 0 hoan vi
    }else{
        return -1;//hoan vi
    }
});
console.log(mangSortTheoTen);