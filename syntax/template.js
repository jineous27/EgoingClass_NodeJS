//자바스크립트에서 문자를 표현하는 편리한 방법
var name = 'kk8805';
var letter = 'Dear '+name+' \n\
 Lorem ipsum dolor sit amet, consectetur. '+name+'asf.'+name;
console.log(letter);
//$ {}괄호 한고 변수를 넣으면, 자동으로 그 안에 변수값이 들어오게 된다. 따로 +,' 기호들 안써도 됨. 
var letter = `Dear ${name} 

 Lorem ipsum dolor sit amet, consectetur. ${name}asf.${name}`;

console.log(letter);
