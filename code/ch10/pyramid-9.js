const http = require('http');
const getBody = {
  bodyArray: [],
  saveBody: function(chunk){
    this.bodyArray.push(chunk);
  },
  printBody: function(){
    console.log(this.bodyArray.join(''))
    this.allDone();
  },
  allDone: function(){},
  getResult: function(result){
    result.on('data', this.saveBody.bind(this));
    result.on('end', this.printBody.bind(this));
  }
};

http.get('http://refactoringjs.com', getBody.getResult.bind(getBody));

const test = require('tape');
test('our async routine', function (assert) {
  getBody.allDone = function(){
    assert.equal(getBody.bodyArray.length, 2);
    assert.end();
  }
  http.get('http://refactoringjs.com',
           getBody.getResult.bind(getBody));
});


