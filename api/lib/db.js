var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  userName: String,
  password: String,
});
var image = new Schema({
  userName: String,
  imageName: String
})
mongoose.model('User', User);
mongoose.model('image', image);
mongoose.connect('mongodb://localhost/users');
