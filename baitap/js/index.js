//
var dataJson = localStorage.getItem("DSNV_JSON");
var nvArr = JSON.parse(dataJson);

DSNV = [];
if (dataJson !== null) {
  // kiem tra du lieu lay len co phai array khoong truoc khi render

  var dataArr = JSON.parse(dataJson);
  DSNV = dataArr.map(function (item) {
    var nv = new NhanVien(
      item.tk,
      item.name,
      item.email,
      item.matKhau,
      item.ngayLam,
      item.luongCb,
      item.chucVu,
      item.gioLam
    );
    return nv;
  });

  renderDSNV(DSNV);
}

renderDSNV(nvArr);
function themNv() {
  //   alert("us");
  // lay thong tin sinh vien tu form
  var tk = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCb = Number(document.getElementById("luongCB").value);
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = Number(document.getElementById("gioLam").value);

  // tao object
  // var nv = {
  //   tk: tk,
  //   name: name,
  //   email: email,
  //   matKhau: matKhau,
  //   ngayLam: ngayLam,
  //   luongCb: luongCb,
  //   chucVu: chucVu,
  //   gioLam: gioLam,
  //   TongLuong: function () {
  //     switch (this.chucVu) {
  //       case "Sếp":
  //         return this.luongCb * 3 * gioLam;
  //       case "trưởng phòng":
  //         return this.luongCb * 2 * gioLam;
  //       case "nhân viên":
  //         return this.luongCb * gioLam; // Tổng lương bằng lương cơ bản nếu là nhân viên
  //       default:
  //         return 0; // Nếu chức vụ không xác định, trả về 0
  //     }
  //   },
  //   xepLoai: function () {
  //     if (this.gioLam >= 192) {
  //       return "Xuat sac";
  //     } else if (this.gioLam >= 176) {
  //       return "Gioi";
  //     } else if (this.gioLam >= 160) {
  //       return "Kha";
  //     } else {
  //       return "Trung binh";
  //     }
  //   },
  // };

  // tao object tu class Nhan Vien
  var nv = new NhanVien(
    tk,
    name,
    email,
    matKhau,
    ngayLam,
    luongCb,
    chucVu,
    gioLam
  );
  // them vao mang
  DSNV.push(nv);

  // luu vao localStorage
  var dataJson = JSON.stringify(DSNV);
  localStorage.setItem("DSNV_JSON", dataJson);

  // console.log("🚀 ~ themNv ~ DSNV:", DSNV);
  // rederDSNV
  renderDSNV(DSNV);
}

// Xoa sv

function xoaNv(id) {
  // dung splice(vi tri, so luong phan tu can xoa)
  // tim vi tri => dung finIndex

  var index = DSNV.findIndex(function (item) {
    return item.tk == id;
  });
  console.log("🚀 ~ index ~ index:", index);
  DSNV.splice(index, 1);
  // cap nhat lai layout sau khi xoa

  renderDSNV(DSNV);
}

// sua nhan vien
function suaNv(id) {
  console.log(id);
  var index = DSNV.findIndex(function (item) {
    return item.tk == id;
  });
  console.log("🚀 ~ index ~ index:", index);

  var nhanVien = DSNV[index];

  $("#myModal #tknv").val(nhanVien["tk"]);
  $("#myModal #tknv").attr("readonly", true);
  $("#myModal #name").val(nhanVien["name"]);
  $("#myModal #email").val(nhanVien["email"]);
  $("#myModal #datepicker").val(nhanVien["ngayLam"]);
  $("#myModal #luongCB").val(nhanVien["luongCb"]);
  $("#myModal #chucvu").val(nhanVien["chucVu"]);
  $("#myModal #gioLam").val(nhanVien["gioLam"]);

  $("#myModal").modal("show");
}

function updateNv(e) {
  var tk = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCb = Number(document.getElementById("luongCB").value);
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = Number(document.getElementById("gioLam").value);

  var index = DSNV.findIndex(function (item) {
    return item.tk == tk;
  });
  console.log("🚀 ~ index ~ index:", index);
  var nv = new NhanVien(
    tk,
    name,
    email,
    matKhau,
    ngayLam,
    luongCb,
    chucVu,
    gioLam
  );

  DSNV[index] = nv;

  // luu vao localStorage
  var dataJson = JSON.stringify(DSNV);
  localStorage.setItem("DSNV_JSON", dataJson);

  // console.log("🚀 ~ themNv ~ DSNV:", DSNV);
  // rederDSNV
  renderDSNV(DSNV);
  $("#myModal #tknv").val("");
  $("#myModal #tknv").attr("readonly", false);
  $("#myModal #name").val("");
  $("#myModal #email").val("");
  $("#myModal #datepicker").val("");
  $("#myModal #luongCB").val("");
  $("#myModal #chucvu").val("");
  $("#myModal #gioLam").val("");
  $("#myModal").modal("hide");
}
