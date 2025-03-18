//eventlistener listening for installation event to open new tab to sales page
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    // This code will run only when the extension is installed.
    chrome.tabs.create({ url: "https://bubblehacks.io" });
  }
});
