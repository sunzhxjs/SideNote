'use strict';

//console.log('\'Allo \'Allo! Popup');

document.addEventListener('DOMContentLoaded', function () {
	//console.log("js go");	
	
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true, "currentWindow": true}, function (tabs) {
    var url = tabs[0].url;
    var hash = md5(url);
    //$('#Notes').val(hash);
    //console.log(hash);
    chrome.storage.sync.get(hash,function(result){
    	if(result[hash])
    	$('#Notes').val(result[hash].content);
    });
    $('#save').click(function(){
    	var data = {};
        data[hash]={};
    	data[hash].content=$('#Notes').val();
        data[hash].url = url;
    	chrome.storage.sync.set(data,function(){
    		//console.log("saved");
            window.close();
    	});
    });
    $('#clear').click(function(){
        $('#Notes').val('');
        chrome.storage.sync.remove(hash,function(){ });
    });

 });

	
});
	
