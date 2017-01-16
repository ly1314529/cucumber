module.exports=function (type,action,element,done) {
	var ele=(type==='link')?'='+element:element;
	var method=(action==='click')?'click':'doubleclick';
	
	this.browser[method](ele)
	     .pause(5000)
	     .call(done);
};



/*
参数（执行的动作，类型，被执行的元素，回调）
判定被执行的元素类型，定义为element
判定执行动作的方法，单击，双击
执行动作，任务完成后，回调
*/
