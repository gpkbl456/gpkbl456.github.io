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
  count = 1;
  var box=[];
  for (var i = 1; i < 5; i++) {
    var tambox = document.getElementById("box"+i);
    box.push(tambox.textContent);
  }
  digital(box);
};
function digital(box) {
  var itamp;
  var jtamp
  var Acount=0;
  var Bcount=0;
  for (var i = 0; i < box.length; i++) {
    itamp = box.indexOf(box[i]);
    jtamp = random.indexOf(random[i]);
    if (itamp == jtamp) {
      Acount++;
      alert(Acount+'a');
    }else if (itamp != jtamp) {
      Bcount++;
      alert(Bcount+'b');
    }
  }
  alert('?');
  var text = document.getElementById('answer');
  alert(text);
  text.textContent = Acount + "<span class='a'>A</span>" + Bcount + "<span class='b'>B</span>";
};
