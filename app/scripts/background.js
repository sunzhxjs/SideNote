'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: 'mark'});

//console.log('\'Allo \'Allo! Event Page for Browser Action');
chrome.tabs.onReplaced.addListener(function(addedID,removedID){
	chrome.tabs.get(addedID,function(tab){
		Notify(tab.url);
	});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
		if(changeInfo.status=="complete"){
			//console.log("change");
			Notify(tab.url);
	}
		
		
});

function Notify(url){
	var hash = md5(url);
		chrome.storage.sync.get(hash,function(result){
			if(result[hash]){
			var opt = {
			type: "basic",
			title: "Notes notification",
			message: "There are some notes for this page!",
			iconUrl: "../images/icon-38.png"
		};
			//console.log(result[hash]);
			chrome.notifications.create("newnotes",opt,function(){ 
				console.log("hehe");
				setTimeout(function(){
				chrome.notifications.clear("newnotes",function(){ });
				},3000);
			});
			
			}

		});
}
