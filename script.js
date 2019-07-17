

chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    var title = tabs[0].title;
    $('#title').html(title);
    var len = title.toString().length;
    if(len > 65) {
        $('#titleCount').css({"color": "red"});
        $('#titlelen').css({"color": "red"});
    }
    $('#titlelen').html(len); 
});


document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.executeScript(null, {code:"document.head.querySelector(`[name=description]`).content;"}, function(results) {
        const res = JSON.stringify(results).slice(2,-2);
        if(results[0] == null) 
            document.getElementById("description").innerHTML = "Description not set";
            else {
                document.getElementById("description").innerHTML = res; 
                document.getElementById("desclen").innerHTML = res.length;
                if(res.length > 160) {
                    document.getElementById('descCount').style.color="red";
                    document.getElementById('desclen').style.color="red";
                }
            }
    }); 
    
    chrome.tabs.executeScript(null, {code:"document.head.querySelector(`[name=robots]`).content;"}, function(results) {
        const res = JSON.stringify(results).slice(2,-2);
        if(results[0] == null) 
            document.getElementById("robots").innerHTML = "Robots not set";
            else 
                document.getElementById("robots").innerHTML = res; 
    }); 
    
    chrome.tabs.executeScript(null, {code:"document.head.querySelector(`[name=keywords]`).content;"}, function(results) {
        const res = JSON.stringify(results).slice(2,-2);
        if(results[0] == null) 
            document.getElementById("keywords").innerHTML = "Keywords not set";
            else 
                document.getElementById("keywords").innerHTML = res; 
    }); 
    
    });   
    






