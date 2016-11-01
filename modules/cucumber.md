* 这是一个测试框架，就不多做介绍了，用的是BBD
   * 在他的目录下面，主要有
   
   ```
   test
   /features
   /steps
   /support
   ```
    
    * features   (login.feature)
    
    ```
Feature: Admin login
Scenario:  successful

     When 
     And
     Then
  ```
  
  * steps
  
  when.js
  then.js
  
  * support
   
  ```javascript
  module.exports = function (falseCase, docTitle, done) {
    this.browser
        .getTitle()
        .then(function (title) {
            if (falseCase) {
                title.should.not.equal(docTitle, 'expected title not to be ' + docTitle);
            } else {
                title.should.equal(docTitle, 'expected title to be "' + docTitle + '"  but found "' + title + '"');
            }
        })
        .call(done);
};

```

    
