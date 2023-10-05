const http = require('http');
// http 서버를 만들기 위해 내장 모듈 http 가져오기(import)
const fs = require('fs');
// 프로젝트의 파일시스템에 접근하기 위해 내장 모듈 fs 가져오기(import)

// http의 다양한 메서드 중 서버를 만드는 createServer 사용
// createServer는 콜백함수 형식의 하나의 매개변수만 요구 -> 콜백함수는 두 개의 매개변수 처리
http.createServer(function(requset, response){
// 콜백함수의 첫 번째 매개변수인 request가 무엇을 요구하는지 확인

// 웹사이트에 접속하는 행위가 있을 시 아래 console.log() 두 가지가 실행
console.log(requset.method);
console.log(requset.url);

// Content-Type은 http, protocol이 원하는 값으로 statusCode(접속코드)와 함께 명시해주는 규칙
let writeHeadObject= {
  'Content-Type' : 'text/html'
}

// 200 정상적으로 접속되었다는 코드
// Content-Type이 HTML이라는 두번째 매개변수 객체 타입
// 200 = OK, 연결 잘 됨 (404 : 에러) / WriteHead (Head:속성)

response.writeHead(200, writeHeadObject)
// end = 연결 잘 되었으니 통신을 종료함
// -> 패킷통신 : 여러명에게 주니까 준 다음에 끊어버림 (<-> 회선통신), 요청이 올 때마다 연결&종료 반복

// file system 모듈을 사용하여 미리 정적으로 만들어진 index.html 파일을 콜백함수로 읽어드린 것을 '응답 데이터'로 활용한 예시
  fs.readFile("./230913_training.html", function(err, data){
    if (err){
      console.error("파일을 읽지 못했습니다.");
    } else {
      response.end(data);
    }
  })
}).listen(8080);
// 터미널에 node app.js -> 연결 주소 localhost:8080 -> 터미널 컨트롤c 입력해서 서버 종료