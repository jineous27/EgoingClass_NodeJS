console.log(Math.round(1.6)); //즉 round라는 함수는 반올림을 해주는 내장된 함수이다//
console.log(Math.round(1.3));

function sum(first, second){ //이 argument를 받아서 함수 안으로 전달해주는 걸 parameter (매개변수)라 부름.
    console.log('a');
    return first+second; // return 이 붙어 있으면, 다른 (함수)기능을 멈추고 return은 어떤 값을 출력시킨다.
    console.log('b');
}

sum(2,4); //함수는 입력값을 받을 수 있고 2 or 4, 각각 다르게 반응할 수 있어요. 
//이러한 입력값 각각을 argument(인자)라고 한다. 

console.log(Math.round(1.6)); // 함수의 출력을 받아서 다양한 용도로 쓸 수 있다는 것. 이메일/파일이름 등등
