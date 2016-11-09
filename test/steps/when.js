
module.exports=function() {
	this
	    .when(/^I (\s+)(click|doubleclick) (\s+)on (\s+)the (\s+)(link|element|button) (\s+)"$string"$/,
		     require('../support/action/clickElement'))

};
