function register() {
  var user = $('input[name="username"]').val();
  var pwd = $('input[name="passwd"]').val();
  $.ajax({
    url: "http://localhost:3977/apis/register",
    type: "POST",
    data: {
      userName: user,
      password: pwd
    },
    success: function (data) {
      window.location.href = '/';
    },
    error: function (err) {
      console.log(err);
    }
  });
};

function login() {
  var user = $('input[name="username"]').val();
  var pwd = $('input[name="passwd"]').val();
  console.log(user +'\n'+ pwd);
  $.ajax({
    url: "/apis/login",
    type: "POST",
    data: {
      userName: user,
      password: pwd
    },
    success: function (data, aa, bb, cc) {
      // console.log(data);
      console.log(aa);
      console.log(bb);
    },
    error: function (err) {
      console.log('err: '+ err);
    }
  });
};
