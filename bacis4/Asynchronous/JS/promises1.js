const myPromise = new Promise((resolve, reject) => {
  // ทาํการดาํ เนินการบางอยา่ ง
  let success = true; // เปลีEยนเป็น false เพืEอทดสอบสถานะ rejected

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

myPromise
  .then((message) => {
    console.log(message); // จัดการผลลัพธ์ทีEสําเร็จ
  })
  .catch((error) => {
    console.error(error); // จัดการข้อผิดพลาด
  });
