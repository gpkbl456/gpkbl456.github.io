var count = 1;
function num_btn(num) {
  var div = document.getElementById("box" + count);
   div.textContent = num;
   count++;
};
function cut() {
  var div = document.getElementById("box" + (count-1));
   div.textContent = "";
   count - 2;
};
function ok() {
  count = 1;
};
