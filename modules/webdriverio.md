第一次接触这个名词，当时还是很认真的看了一番，时隔几个月，又忘了。。。无奈，公司开始了测试任务，有种赶鸭子上架的感觉，其实自己啥也不会，另外还有很多琐事，有种从头开始的感觉！！！
无奈。。。

------

* [webdriverio](http://webdriver.io/)
   * 这是一款能够让你控制浏览器或者是依靠几句代码就能控制移动设备的
   * 运行一个app的方法
   
   ```javascript
   var client = require('webdriverio').remote({
    desiredCapabilities: {
        browserName: 'chrome'
    }
});
 
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.Should();
chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = client.transferPromiseness;
 
describe('my app', function() {
    before(function () {
        return client.init();
    });
 
    it('should contain a certain text after clicking', function() {
        return client
            .click('button=Send')
            .isVisible('#status_message').should.eventually.be.true
            .getText('#status_message').should.eventually.be.equal('Message sent!');
    });
});

```

    * 快速创建一个配置
 
 
 
 
 
   
   
