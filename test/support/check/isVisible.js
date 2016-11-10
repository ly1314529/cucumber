module.exports=function (element,falsecase,done) {
     this.browser
         .isVisible(element)
         .then(function (visible) {
         	if (falsecase) {
         		visible.should.not.equal(true,'expected element "'+element +'"not to be visible');
         		else {
         			visible.should.equal(true,'expected element "' + element +' "to be visible');
         		}
         	}
         });
};
