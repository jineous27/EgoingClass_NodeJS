var number = [1, 400, 12, 34, 5];
// 이렇게 배열된 숫자를 다 더하기 위해서는 반복문을 사용하면 된다. 
var i = 0;
var total = 0;
while(i < number.length){ //number.length를 작성하면,, 유연하고 dynamic하게 대응..
    total = total + number[i];
    i = i + 1
}
console.log(`total: ${total}`);