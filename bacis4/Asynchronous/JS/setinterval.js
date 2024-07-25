// ฟังกช์ นั ทีEจะถูกเรียกใชซ้าํ
function myIntervalFunction() {
 console.log("This is an interval function");
}
// เรียกใชฟ้ ังกช์ นั setInterval() พร้อมกบั ส่งฟังกช์ นั myIntervalFunction และระยะเวลา 2000 มิลลิวินาที (2 วินาที)
const intervalID = setInterval(myIntervalFunction, 2000);
// ตวัอยา่ งการหยดุ interval หลังจาก 10 วินาที
setTimeout(() => {
 clearInterval(intervalID);
 console.log("Interval stopped");
}, 10000);