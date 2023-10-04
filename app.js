const http = require('http');
http.createServer(function(requset, response){

  let writeHeadObject = {
    'Content-Type': 'text/html'
  }

  response.writeHead(200, writeHeadObject);
  // 200 = OK, 연결 잘 됨 (404 : 에러) / WriteHead (Head:속성)
  response.end("hello");
  // end = 연결 잘 되었으니 통신을 종료함
  // -> 패킷통신 : 여러명에게 주니까 준 다음에 끊어버림 (<-> 회선통신), 요청이 올 때마다 연결&종료 반복
}).listen(8080);
// 터미널에 node app.js -> 연결 주소 localhost:8080 -> 터미널 컨트롤c 입력해서 서버 종료