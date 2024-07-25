function doSomething(callback) {
  console.log("Doing something...");
  callback();
}
function done() {
  console.log("Done!");
}
doSomething(done);
