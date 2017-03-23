 console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user= os.userInfo();

console.log(user);


fs.appendFileSync('greetings.txt', JSON.stringify(user) , function(err) {
if (err) {
  console.log(
    'Unable to Write FIle'
  );

}
});
