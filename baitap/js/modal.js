// Show/hide password onClick of button using Javascript only

// https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only

function show() {
  var p = document.getElementById("pwd");
  p.setAttribute("type", "text");
}

function hide() {
  var p = document.getElementById("pwd");
  p.setAttribute("type", "password");
}

var pwShown = 0;

document.getElementById("eye").addEventListener(
  "click",
  function () {
    if (pwShown == 0) {
      pwShown = 1;
      show();
    } else {
      pwShown = 0;
      hide();
    }
  },
  false
);

//   font-family: 'Vibur', cursive;
//   font-family: 'Abel', sans-serif;
// font-family: 'Pacifico', cursive;
// font-family: 'Dancing Script', cursive;
// font-family: 'Alegreya', serif;
// font-family: 'Abril Fatface', cursive;
// font-family: 'Playball', cursive;
// font-family: 'Unica One', cursive;
// font-family: 'Oleo Script', cursive;
// font-family: 'Share', cursive;
// font-family: 'Overlock', cursive;
// font-family: 'Arima Madurai', cursive;
// font-family: 'Playfair Display', serif;
// font-family: 'Merriweather', serif;
// font-family: 'PT Serif', serif;
// font-family: 'Dosis', sans-serif;

function NhanVien(
  _tk,
  _name,
  _email,
  _matKhau,
  _ngayLam,
  _luongCb,
  _chucVu,
  _gioLam
) {
  this.tk = _tk;
  this.name = _name;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCb = _luongCb;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = function () {
    switch (this.chucVu) {
      case "sep":
        return this.luongCb * 3;
      case "truongphong":
        return this.luongCb * 2;
      case "nhanvien":
        return this.luongCb; // Tổng lương bằng lương cơ bản nếu là nhân viên
      default:
        return 0; // Nếu chức vụ không xác định, trả về 0
    }
  };
  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "Xuat sac";
    } else if (this.gioLam >= 176) {
      return "Gioi";
    } else if (this.gioLam >= 160) {
      return "Kha";
    } else {
      return "Trung binh";
    }
  };
}
