module.exports=function (type,action,element,done) {
	var ele=(type==='link')?'='+element:element;
	var method=(action==='click')?'click':'doubleclick';
	
	this.browser[method](ele)
	     .call(done);
};
