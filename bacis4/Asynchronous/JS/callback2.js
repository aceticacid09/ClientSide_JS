// ฟังกช์ นั สาํหรับการคาํนวณ
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
// ฟังกช์ นั Callback
function myCallback(result) {
  console.log("The result is: " + result);
}
// เรียกใชฟ้ ังกช์ นั myCalculator พร้อมกบั ส่งฟังกช์ นั myCallback ไปเป็นพารามิเตอร์
myCalculator(5, 10, myCallback);
