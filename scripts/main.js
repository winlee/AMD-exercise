console.info("加载成功");

//requirejs.config({
//	baseUrl: 'scripts',
//	paths:{
//		'text':'require/text',
//	}
//});
//
//require(['math'], function(math){
//	console.info(math.add(1,1));
//});

//requirejs.onError = function(err){
//	console.log(err.requireType);
//	if(err.requireType === 'timeout'){
//		console.log('modules: '+ err.requireModules);
//	}
//	console.log(err.requireModules);
//	console.log(err.contextName);
//	console.log(err.requireMap);
//
//	throw err;
//}

require.config({
	baseUrl:"scripts",
	paths:{
		jquery:"lib/jquery.min",
		text:"lib/text"
	}
});

require(['jquery','text!review.txt','text!../template/template1.html','math'], function($,review,template1,math){
	debugger;
	console.log('hh');
    var page = $(".page");
	page.html(review);
	page.append(template1);
	math.showMainAttr();
});