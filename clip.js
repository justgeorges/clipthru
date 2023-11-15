document.getElementById("clipButton").addEventListener("click", function () {
  // Implement web clipping logic here
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: "clip" });
  });
});
