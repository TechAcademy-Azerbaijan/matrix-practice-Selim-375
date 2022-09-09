const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let len = parseInt(result.input);
let res = [];
for (let i = 0; i < len; i++) {
  let element = new Array(len).fill("*");
  res.push(element);
}

console.log(res.join("\n").replaceAll(",", ""));
  
});
