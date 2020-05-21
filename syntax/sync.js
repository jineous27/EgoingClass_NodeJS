
// //ReadFileSync 연습하기 - NodeJS 문서- 

// var result = fs.ReadFileSync('syntax/sample.txt', 'utf8');
// console.log(result);

console.log('A');
var result = fs.readFile('syntax/sample.txt', 'utf8', function(err, result){

});
console.log(result);
console.log('C');