window.onload=function(){
	var scroll=new IScroll('#scroll_zone',{ 
		scrollX: true, 
		scrollY: false, 
		mouseWheel: true,
		scrollbars: true, 
	});
	
	var date_start=new JsDatePick({
			useMode:2,
			target:"data_start",
			dateFormat:"%Y-%m-%d"
		});
	var date_end=new JsDatePick({
		useMode:2,
		target:"data_end",
		dateFormat:"%Y-%m-%d"
	});
};


