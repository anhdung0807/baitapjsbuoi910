// viet function nhan vao array va render ra table

function renderDSNV(dsnv) {
  var contentHTML = "";
  // tao bien chua danh sach the tr
  for (var i = 0; i < dsnv.length; i++) {
    var nv = dsnv[i];
    var trString = `
      <tr>
      <td> ${nv.tk} </td>
      <td> ${nv.name} </td>
      <td> ${nv.email} </td>
      <td> ${nv.ngayLam} </td>
      <td> ${nv.chucVu} </td>
      <td> ${nv.tongLuong()} </td>
      <td> ${nv.xepLoai()} </td>
      <td> 
      <button onclick=xoaNv("${nv.tk}") class="btn btn-success">
      Xóa
      </button>
      <button onclick=suaNv("${nv.tk}") id="btnSua" class="btn btn-success">
      Sửa
      </button>
      </td>
      </tr>
      `;
    contentHTML += trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

// viet funtion hienThiThongTin

// function hienThiThongTin(data) {
//   document.getElementById("tknv").value = data.tk;
//   document.getElementById("name").value = data.name;
//   document.getElementById("email").value = data.email;
//   document.getElementById("password").value = data.matKhau;
//   document.getElementById("datepicker").value = data.ngayLam;
//   document.getElementById("luongCB").value = data.luongCb;
//   document.getElementById("chucvu").value = data.chucVu;
//   document.getElementById("gioLam").value = data.gioLam;
// }
