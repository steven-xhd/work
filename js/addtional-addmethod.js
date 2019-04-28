/*手机号码验证*/
$.validator.addMethod("istelnumber", function(value, element,params) {     
    if(value.length != 11){
    	return false
    }
    if(value>=params[0] && value<=params[1]){
    	return true
    }else{
    	return false
    }
}, "请正确填写您的手机号码！");

$.validator.addMethod("af",function(value,element,params){  
    if(value.length>1){
        return false;
    }
    if(value>=params[0] && value<=params[1]){
        return true;
    }else{
        return false;
    }
},"必须是一个字母,且a-f");