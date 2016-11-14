define(function(require,exports,module){
	var security = require('../view/security.js');
	var Index = {
		init:function(){
			$('#test1').html( security );
			// $(function(){
			// 	$.ajax({
			// 		url: '../json/htader.json',
			// 		type: 'GET',
			// 		success: function(result){
			// 			$('#div1').text(result.name);
			// 			$('#img').css({'src':result.img});
			// 		}
			// 	})
			// });
		}
	}
    module.exports = Index;
})