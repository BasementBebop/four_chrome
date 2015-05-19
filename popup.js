var appId = "iagdoelipgfbhbnlmcogjdhejnmnbanj";

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#disable').addEventListener('click', function() {
  	chrome.management.setEnabled(appId, false);
  });
	  
  document.querySelector('#adpearance').addEventListener('click', function() {
    window.open("http://adpearance.com");
  });
});