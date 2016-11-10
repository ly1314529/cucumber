module.exports=function() {
   this
       .then(/^I expect that (element|inputfield) "$string"( not)* contains the text "$string"$/,
            require('../support/check/checkContent'))  /*check the text in the element*/
       .then(/^I expect that element "$string" is( not)* visible$/,
            require('../support/check/isVisible'))    /* chaeck the elment is visible */
            
};
