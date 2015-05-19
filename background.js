// if (true) {
// 	chrome.runtime.reload();
// };

console.log('foo');

// chrome.tabs.query(null, function(tab) {
// 	console.log(tab.url);
// });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log(changeInfo.url);


  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "updated"});
  });
}); 