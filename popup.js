
//listening for events sent from bubble application
window.addEventListener('message', function (event) {
    console.log(event); 
    if (event.data == "messageFromBubble" && event.origin == "https://bumblebeee-gpt-extension.bubbleapps.io") {
        getAndPostActiveTabContent();
    } 
}, false);


//function to post messages to bubble application 
function postMessageToBubble(msg) {
    let iframe = document.getElementById('ExtensioniFrame');
    iframe.contentWindow.postMessage(msg, '*');
}


//get text from current tab and send it to bubble
function getAndPostActiveTabContent() {
    chrome.tabs.query ({ active: true, currentWindow: true }, function (tabs) { 
        chrome.scripting.executeScript ({
            target: { tabId: tabs[0].id},
            function: getInnerText
        }, (result) => {
            postMessageToBubble(result[0].result);
        });
    });
}

function getInnerText() {
    return document.body.innerText;
}

