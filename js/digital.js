var count = 1;
function num_btn(num) {
  var div = document.getElementById("box" + count);
   div.textContent = num;
   if (count < 4) {
     count++;
   }
};
function cut() {
  alert(count);
  if (count == 4) {
    var div = document.getElementById("box" + count);
     div.textContent = "";
     count -1 ;
  }else if (count == 3) {
    var div = document.getElementById("box" + count);
     div.textContent = "";
     count -1 ;
  }else if (count == 2) {
    var div = document.getElementById("box" + count);
     div.textContent = "";
     count -1 ;
  }else if (count == 1) {
    var div = document.getElementById("box" + count);
     div.textContent = "";
  }
};
function ok() {
  count = 1;
};
