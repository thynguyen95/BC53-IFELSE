var number1 = 3;
var number2 = 5;
var number3 = "3";

// ==: chỉ so sánh giá trị.
// ===: so sánh giá trị và kiểu dữ liệu
console.log(number1 == number2); //false
console.log(number1 == number3); // true
console.log(number1 === number3); //false

console.log(number1 != number2); //true
console.log(number1 != number3);

var hk = "kha";
var hl = "8";

console.log(hk == "kha" && hl > 8);
console.log(hk == "kha" || hl > 8);

var test = false;
console.log("!test", !!test);

var name1 = "Tuann";
var name2 = "Tuan";
// so sánh chuỗi: sẽ so sánh từng kí tự theo thứ tự a => z. a nhỏ nhất, tăng dần tới z.

console.log(name1 >= name2);

// cấu trúc câu điều kiện :
// if(câu điều kiện) {
// nội dung code được thực thi khi thỏa điều kiện
// }

if (number1 == number3) {
  console.log("ok");
}

if (!test) {
  console.log("run test");
}

document.getElementById("tinh").onclick = function () {
  // tính tiền phạt thẻ tín dụng.
  // B1: xác định input
  // payment: số tiền phải trả cho thẻ tín dụng.
  // moneyBalance: số dư thẻ tín dụng.
  // result: kết quả.
  // pentalty: phí phạt.

  var moneyBalance = +document.getElementById("moneyBalance").value;
  var payment = +document.getElementById("payment").value;

  // B2: xử lý
  // nếu số tiền trả ít hơn số chi => phat
  // số tiền trả = hoặc lớn hơn số chi => ko phạt

  //   cách 1:
  //   if (moneyBalance < payment) {
  //     var result = payment - moneyBalance;
  //     var pentalty = result * 0.015;

  //     document.getElementById("result").innerHTML = pentalty;
  //   } else {
  //     document.getElementById("result").innerHTML = "bạn đã trả dư tiền";
  //   }

  //cách 2:
  var result = payment - moneyBalance;
  if (result > 0) {
    var pentalty = result * 0.015;
    document.getElementById("result").innerHTML = pentalty;
  } else {
    document.getElementById("result").innerHTML = "bạn đã trả dư tiền";
  }
};

// cấu trúc if else:
// if(điều kiện) {
//     nội dung thực thi khi thỏa điều kiện.
// } else {
//     nội dung thực thi khi không thỏa điều kiện bên trên
// }

document.getElementById("hanldeSalary").onclick = function () {
  //tính tiền OT
  // B1: xác định input
  // hourWork: số h làm
  // salary: số tiền làm trong 1 giờ
  // coefficientSalary: hệ số lương OT

  var hourWork = +document.getElementById("hourWork").value;
  var salary = +document.getElementById("salary").value;
  var totalSalary;
  const COEFFICIENT_SALARY = 1.5;

  // B2: xử lý:
  if (hourWork > 40) {
    var hourOT = hourWork - 40;
    totalSalary = 40 * salary + hourOT * (salary * 1.5);
  } else {
    totalSalary = hourWork * salary;
  }

  document.getElementById(
    "resultSalary",
  ).innerHTML = `Tổng lương : ${totalSalary}`;
};

// toán tử 3 ngôi.
// cú pháp:
//     điều kiện ? nội dung sẽ thực thi khi đk đúng : nội dung sẽ thực thi khi đk sai

var diemHK = 8;

var dtb = diemHK > 8 ? "Học sinh giỏi !" : "Học sinh khá !";
console.log("dtb", dtb);

// if(diemHK > 8) {
//     "Học sinh giỏi";
// } else {
//     "Học sinh khá "
// }

var ticked = 1;
var age = 18;
if (age >= 18) {
  if (ticked > 0) {
    console.log("đi đu đưa đi");
  } else {
    console.log("làm gì có tiền mà vé");
  }
} else {
  console.log("chua du tuoi");
}

// cú pháp else if

// if(câu điều kiện) {
// nội dung thực thi khi thỏa điều kiện
// } else if(câu điều kiện) {
// nội dung thực thi khi thỏa điều kiện
// }
//   else {
// nội dung thực thi khi không thỏa 2 điều kiện bên trên
// }

// bài tập tính tiền giỏ hàng
// B1: xác định input
// tên, số lượng , đơn giá, tổng tiền

function hanldeCart() {
  var name = document.getElementById("name").value;
  var quality = +document.getElementById("quality").value;
  var price = +document.getElementById("price").value;
  var total;

  // B2: xử lý
  // lưu ý so sánh khoảng từ a-> b trong js
  // trong toán học: 50 < x < 100
  // trong js: x > 50 && x < 100
  if (quality < 50) {
    total = quality * price;
  } else if (quality >= 50 && quality <= 100) {
    total = 49 * price + (quality - 49) * price * 0.92;
  } else {
    // total = (49 * price) + (51 * price * 0.92) + (quality - 100) * price * 0.88;
    total = 100 * price + (quality - 100) * price * 0.88;
  }

  document.getElementById("resultCart").innerHTML = total;
}

// hanldeCart();

document.getElementById("hanldeCart").onclick = hanldeCart;

// Bài tập xếp loại học sinh

document.getElementById("hanldeDiem").onclick = function () {
  // B1: xác định input
  // Tên, toán , lý , hóa
  var hoTen = document.getElementById("hoTen").value;
  var diemToan = +document.getElementById("toan").value;
  var diemLy = +document.getElementById("ly").value;
  var diemHoa = +document.getElementById("hoa").value;

  // B2: xử lý:
  // 1. tính điểm trung bình.
  // 2. lấy dtb để đi xếp loại

  var DTB = (diemToan + diemLy + diemHoa) / 3;
  var xepLoai = document.getElementById("resultXepLoai").innerHTML;
  console.log("xepLoai Before iF", xepLoai);

  if (DTB >= 8.5) {
    xepLoai = "Giỏi";
  } else if (DTB >= 6.5) {
    xepLoai = "Khá";
  } else if (DTB >= 5) {
    xepLoai = "Trung Bình";
  } else {
    xepLoai = "Yếu";
  }

  console.log("xepLoai after if", xepLoai);

  // B3: xuất kết quả ra màn hình.
  document.getElementById("resultXepLoai").innerHTML = `
    <p class="bg-danger">Họ tên: ${hoTen}</p>
    <p>DTB: ${DTB}</p>
    <p>Xếp loại: ${xepLoai}</p>
  `;
};

var ganGiaTri = (document.getElementById("ganGiaTri").value = "8");
console.log("ganGiaTri", ganGiaTri);

// document.getElementById("readNumber").onclick = function () {
//   var number = +document.getElementById("number").value;
//   var html;
//   if (number === 1) {
//     html = "Số một";
//   } else if (number === 2) {
//     html = "Số hai";
//   } else if (number === 3) {
//     html = "Số ba";
//   } else if (number === 4) {
//     html = "Số bốn";
//   } else {
//     html = "Vui lòng nhập từ 1 tới 4";
//   }

//   document.getElementById("resultReadNumber").innerHTML = html;
// };

// switch case chỉ sử dụng với so sánh bằng và biết trước những trường hợp sẽ xảy ra
// switch(gía trị truyền vào để so sánh) {
//   case tencase:
//     Nội dung xử lý khi case thỏa điều kiện;
//     break;
//   case tencase:
//     Nội dung xử lý khi case thỏa điều kiện;
//     break;
//     .
//     .
//   default:
//     nội dung xử lý khi những case trên không thỏa điều kiện - tương ứng với else cuối cùng trong if eles
// }
// sau mỗi case phải có break
// break có tác dụng thoát khỏi swicth khi thỏa điều kiện

document.getElementById("readNumber").onclick = function () {
  var number = +document.getElementById("number").value;
  var html;

  switch (number) {
    case 1:
      html = "số một";
    // break;
    case 2:
      html = "Số hai";
    // break;
    case 3:
      html = "Số ba";
    // break;
    case 4:
      html = "Số bốn";
    // break;
    default:
      html = "Vui lòng nhập từ 1 tới 4";
  }

  document.getElementById("resultReadNumber").innerHTML = html;
};

// so sánh khoảng như bài giỏ hàng sử dụng switch case đc ko?
// 0: ko
// 1: đc

document.getElementById("dayOfMonth").onclick = function () {
  var month = +document.getElementById("month").value;
  var dayOfMonth;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 12:
      dayOfMonth = 31;
      break;
    case 2:
      dayOfMonth = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      dayOfMonth = 30;
      break;
    default:
      dayOfMonth = 30;
      break;
  }

  document.getElementById("resultMonth").innerHTML = dayOfMonth;
};
