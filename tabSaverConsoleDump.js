document.getElementById("dumpbutton").addEventListener("click", function() {
    console.log("entering function");
    chrome.windows.getAll({ populate: true }, function(windows) {
        windows.forEach(function(window) {
            window.tabs.forEach(function(tab) {
                //collect all of the urls here, I will just log them instead
                console.log("Window:" + window.id + ",TabURL:" + tab.url);
            });
        });
    });
});