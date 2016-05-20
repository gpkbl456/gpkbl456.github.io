var count = 1;
function num_btn(num) {
  var div = document.getElementById("box" + count);
   div.textContent = num;
   if (count < 5) {
     count++;
   }
};
function cut() {
  if (count == 5) {
    var div = document.getElementById("box" + (count - 1));
     div.textContent = "";
     count = count-1 ;
  }else if (count == 4) {
    var div = document.getElementById("box" + (count - 1));
     div.textContent = "";
     count = count-1 ;
  }else if (count == 3) {
    var div = document.getElementById("box" + (count - 1));
     div.textContent = "";
     count = count-1 ;
  }else if (count == 2) {
    var div = document.getElementById("box" + (count - 1));
     div.textContent = "";
     count = count-1 ;
  }
};
function ok() {
  alert(num_box.length);
  count = 1;
  for (var i = 0; i < num_box.length; i++) {
    var box=[];
  }
};
