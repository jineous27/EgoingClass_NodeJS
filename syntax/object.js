var members = ['egoing', 'k8805', 'James']; //배열안에 정보가 담긴 것 Array의 예시'//
console.log(members[1]);

var i = 0;
while(i < members.length){
    console.log('array loop', members[i]);
    i = i + 1;
}

var roles = {
    'programmer':'egoing',
    'designer' : 'k8805',
    'manager' : 'hoya'
}
console.log(roles.designer); //k8805
console.log(roles['designer']);

for(var n in roles){
    console.log('object => ', n, 'value =>', roles[n]);
}









//역할에 대한 정보를 담을 때 더 적합하다. 표현방법은 { } 중괄호를 씀//
// var role = { 
//     'programmer' : 'egoing',
//     'designer' : 'k8805',
//     'manager' : 'hoya'
// }   
// console.log(role.manager); 
//Array 에서는 [] 를 썻지만, 객체 (Object)에서는 .'쩜'을 찍어서 '이름'을 표시해 준다'//

