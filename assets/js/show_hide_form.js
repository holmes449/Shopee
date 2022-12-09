// Tạo các biến
var formDangKy = document.querySelector(".form-dangky");
var formDangNhap = document.querySelector(".form-dangnhap");
var formModel = document.querySelectorAll(".js-form-model");

// Hiển thị đăng ký
function showDangKy() {
  formDangNhap.style.display = "none";
  formDangKy.style.display = "flex";
}

// Hiển thị đăng nhập
function showDangNhap() {
  formDangKy.style.display = "none";
  formDangNhap.style.display = "flex";
}

// Ẩn đăng ký & đăng nhập
function hideFormAll() {
  formDangKy.style.display = "none";
  formDangNhap.style.display = "none";
}

// Ấn ở ngoài rìa ẩn luôn form
for (var i = 0; i < formModel.length; i++) {
  formModel[i].addEventListener("click", function (event) {
    event.stopPropagation();
  });
}
