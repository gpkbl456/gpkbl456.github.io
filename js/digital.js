var count = 1;
function num_btn(num) {
  var div = document.getElementById("box" + count);
   div.textContent = num;
   count++;
};
function cut() {
  count - 1;
  var div = document.getElementById("box" + count);
   div.textContent = "";
};
function ok() {
  count = 1;
};
