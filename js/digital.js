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
  var newBox = box.join('');
  var newRandom = random.join('');
  for (var i = 0; i < box.length; i++) {
    var bb= box[i];
    var rr= newRandomrandom.indexOf(bb);
    bb = newBox.indexOf(bb);

    if (bb == rr) {
      Acount++;
    }else if (bb != rr && rr != -1) {
      Bcount++;
    }else if (rr = -1) {
      continue;
    }
  }
  for (var i = 1; i < box.length+1; i++) {
    var div = document.getElementById("box" + i);
     div.textContent = "";
  }

  var text = document.getElementById('answer');
  text.innerHTML = Acount + "<span class='a'>A</span>" + Bcount + "<span class='b'>B</span>";
};
