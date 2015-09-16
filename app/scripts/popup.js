'use strict';

//console.log('\'Allo \'Allo! Popup');

document.addEventListener('DOMContentLoaded', function() {
    //console.log("js go");	

    chrome.tabs.query({
        'active': true,
        'lastFocusedWindow': true,
        "currentWindow": true
    }, function(tabs) {
        var url = tabs[0].url;
        var hash = md5(url);
        //$('#Notes').val(hash);
        //console.log(hash);
        chrome.storage.sync.get(hash, function(result) {
            if (result[hash])

                $('#Notes').val(result[hash].content).hide();
                $('#preview').html(result[hash].html);
                $('#preview').width(result[hash].size.width);
                $('#edit').show();
                $('#save').hide();
                $('#clear').hide();
        });
        $('#save').click(function() {
            var data = {};
            data[hash] = {};
            data[hash].content = $('#Notes').val();
            data[hash].url = url;
            data[hash].html = $('#preview').html();
            data[hash].size = {width:$('#preview').width()}
            chrome.storage.sync.set(data, function() {
                //console.log("saved");
                window.close();
            });
        });
        $('#clear').click(function() {
            $('#Notes').val('');
            $('#preview').html('');
            chrome.storage.sync.remove(hash, function() {});
        });

        $('#edit').click(function(){
            $('#Notes').show();
            $('#save').show();
            $('#clear').show();
            $('#edit').hide();
        });

    });


});