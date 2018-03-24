// test-beginner.js
casper.test.begin('Demo contains correct Data Layer', 2, function suite(test) {
  
  casper.start('http://mcblava.demogram.cz/', function() {
    test.comment('Testing http://mcblava.demogram.cz/...');
  
    test.assertEvalEquals(function(){return typeof digitalData}, 'object', 'digitalData is an object.');
    test.assertEval(function(){return digitalData instanceof Object}, 'digitalData is an instance of Object.');
  });
  
  casper.run(function() {
    test.done();
  });
});
