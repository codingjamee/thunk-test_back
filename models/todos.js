const fs = require("fs");
const path = require("path");

//require.main.filename 현재 실행중인 파일의 경로
//p ===  data/todos.json 파일
const p = path.join(path.dirname(require.main.filename), "data", "todos.json");

//파일에서 lists가져오기
//가져오면 callback에 내용 전달하여 실행
const getListsFromFile = (callback) => {
  fs.readFile(p, (error, fileContent) => {
    if (error) {
      return callback([]);
    } else {
      fileContent && callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Todo {
  constructor(id, t) {
    this.id = id;
    this.todo = t;
  }

  save() {
    getListsFromFile((todos) => {
      todos.push(this);
      fs.writeFile(p, JSON.stringify(todos), (error) => {
        console.log(error);
      });
    });
    // fs.readFile(p, (error, filecontent) => {});
    //file 을 읽어오기 fs.readFile
    //file 작성하기 fs.writeFile
  }

  static fetchAll(callback) {
    getListsFromFile(callback);
    //readFile은 asynchronous코드.
    //그래서 실행이 완료가 되면 그다음에 실행할 수 있는 익명함수를
    //전달해 주어 순차적으로 일어날 수 있게 한다.
  } // new키워드로 만든 인스턴스가 아니더라도  Product.fetchAll메서드로 접근가능
};
