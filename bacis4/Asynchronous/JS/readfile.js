const fs = require("fs");
function readFileCallback(err, data) {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
}
// อ่านไฟล์'example.txt' และเรียกใช้readFileCallback หลงัจากอ่านไฟลเ์สร็จสิน
fs.readFile("./Javascript_bacis4/train.txt", "utf8", readFileCallback);
