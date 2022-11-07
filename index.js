//----------------bai1-------------------

/**
 * INPUT: lương 1 ngày, số ngày làm
 PROCESS: (Peseudo code)
 1. lấy input(hardcode) lương 1 ngày = 100;
 số ngày làm = 30;
 2. Công thức tính tiền: lương * số ngày làm
 3. in kết quả
 OUTPUT: lương
 */
 var workingDay = 20;
 var salaryPerDay = 100000;
 var totalSalary = salaryPerDay * workingDay;
 console.log("Tổng lương là: ", totalSalary);
//  function tienLuong() {
//     var workingDay = document.getElementById("workingDay").value*1;
//  var salaryPerDay = document.getElementById("salaryPerDay").value*1;
//  var totalSalary = workingDay * salaryPerDay; 
//  var ketQua = "Tổng 2 số là: " + totalSalary;
//  document.getElementById("divInfo").innerHTML = ketQua;
 
//  }

// ---------------bai2-------------------
/*
INPUT: a,b,c,d,e là 5 số thực
PROCESS: 
1. set cứng giá trị cho a,b,c,d,e 
2. công thức tính trung bình : (a+b+c+d+e)/5
OUTPUT: Trung bình của 5 số thực
*/ 

let a = 1.33,
b=5.34,
c=7.23,
d=9.78,
e=4.54

console.log((a+b+c+d+e)/5);


//-------------bai3-----------------
/*
INPUT: 
 nhập n là Tiền quy đổi
Process:
  1 USD = 23.500 VNĐ
  Công thức quy đổi: n * 23500
  hàm quy đổi mệnh giá tiền: 
  new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND'
  }).format(inputMoney)
Output:
  Xuất ra màn hình tiền quy đổi
*/ 
let n = 0;
n = prompt("Nhập số tiền USD muốn quy đổi: ");  
// console.log(inputMoney);
// alert("Tiền quy đổi được là: "+ inputMoney * 23500 + " VNĐ");
alert("Tiền quy đổi được là: " +
    new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND'
}).format(n * 23500));

//------------bai4--------------
/**
 * INPUT: lenght là chiều dài của hình chữ nhật
 *  width là chiều rộng hình chữ nhật
 * Process: 
 *  Diện tích = (dài * rộng)
 *  Chu vi = (dài + rộng) * 2
 * 
 * Output: chu vi và diện tích hình chữ nhật
 */
 let lenght = 0,
 width = 0;
 lenght = prompt("Mời bạn nhập chiều dài hình chữ nhật: ");
 width = prompt("Mời bạn nhập chiều rộng hình chữ nhật: ");
 alert("Chu vi hình chữ nhật là: " + Intl.NumberFormat().format((lenght + width) * 2));
 alert("Diện tích hình chữ nhật là: " + Intl.NumberFormat().format((lenght * width)));
 
// console.log("Diện tích là: ", lenght * width);
// console.log("Chu vi là: ", (lenght + width) * 2);

//---------------bai5------------------
/**
 * INPUT: nhập n có 2 chữ số
 * Process: tách số như sau
 * 12345 => n % 10 = 5, n = n / 10 = 1234
   1234 => n % 10 = 4, n = n / 10 = 123
    123 => n % 10 = 3, n = n / 10 = 12
    12 => n % 10 = 2, n = n / 10 = 1;
    1 => n % 10 = 1, n = n / 10 = 0;
  OUTPUT: 5+4+3+2+1 = 15
 * 
 */
  let tempt,sum=0;
  function sumNumber(number){
    while(number >0){
      //tempt lấy số 5 khi chạy lần đầu
     tempt = number % 10;
     //sum = 0 + 5 khi chạy lần đầu
     sum += tempt;
    //  number giảm còn 1234 dùng hàm Math.floor để làm tròn số
      number = Math.floor(number/ 10);
    }
    return sum;
  }
  n = prompt("Mời bạn nhập 1 số muốn tính tổng: ");
  alert("Tổng của các ký số vừa nhập: "+sumNumber(n));








