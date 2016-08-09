// background.js
// Figure out how to get this to work if its the first time visitng a web page
//var fresh=true;

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var words = localStorage.words;
    var activeTab = tabs[0];
    chrome.tabs.sendMessage( activeTab.id,{"check":words,"message": "clicked_browser_action", "caseSensitive": localStorage.sensitive});
    
  });
});