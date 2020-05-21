EgoingClass_NodeJS
This file is for taking Egoing NodeJS 2.0 lesson -! Practice & Get over it! You can do it!

# 
* 코드를 반복해서 사용/작성하게 되면, 나중에 유지보수 하는 게 어려워 진다. 그래서, '상수화''반복문''함수'등을 사용해서 최대한 반복되는 코드의 양을 줄인다. (거의 없앤다고 생각-!)

- How to connect a local server? 
(1) Open a terminal
(2) Cd documents => cd EgoingClass_NodeJS 까지 찾아간다.
(3) Node main.js 를 실행하면 로컬 서버랑 연동
(4) localhost:3000 url 로 연결

- Code 가 잘 실행되는지 알아보는 방법? 
(1) 해당 파일 디렉토리에 찾아 간다 e.g) EgoingClass_NodeJS (Terminal을 이용)
(2) 해당 파일을 Terminal에 친다 e.g.) node syntax/function.js (Syntax 파일안의 function파일 실행해라 )
(3) 그러면, function 파일에 적어 놓은 코드 내용들이 terminal에 나타난다. 

- 함수의 역할? 어떠한 Logic (로직=기능)에 이름을 붙이는 거와 같다. 해당 기능을 반복해서 사용-!
 * 가독성이 높아지고, 1억개의 같은 기능이 한번에 폭박적으로 바뀌게되는 편리함-!


- Call back 개념은 아주 중요하면서 어렵다. 한번에 절대 이해가 되지 않기 때문에 낙심 하지 말고, 반복해서 나를 노출시키다보면, Call back 개념에 자연스럽게 적응이 될 것이다. 

- Node JS 에서 우리가 만든 Application 을 좀 더 강인하게 생존하기 위한 Package Manager 도구가 있다. ==> PM2 (자동 저장/업데이트 도구!)
** 
** 실행 방법: pm2 start main.js --watch (마지막에 --watch는 꼭! 꼭! 넣어줘야 한다.)
** 로그 확인법: pm2 log (문제점을 화면에 바로 보여줌)

- 서버에 데이터를 수정, 삭제, 생성, 삭제를 할 때에는 반드시 메소드를 포스트 방식으로 해야 한다-!