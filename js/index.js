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
    "resultSalary"
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

var name = document.getElementById("name").value;
var quality = +document.getElementById("quality").value;
var price = +document.getElementById("price").value;
var total;

// B2: xử lý
