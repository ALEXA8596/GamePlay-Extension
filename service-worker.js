chrome.tabs.onActivated.addListener(async (activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab && tab.url) {
      console.log('Current URL:', tab.url);
      // You can use tab.url as needed
    }
  });
});

if (chrome.runtime && chrome.runtime.onMessage) {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getCurrentTabUrl') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          sendResponse({ url: tabs[0].url });
        } else {
          sendResponse({ url: null });
        }
      });
      return true; 
    } else if (request.action === 'getCurrentTabId') {
      sendResponse({ tabId: sender.tab.id });
    } else if (request.action === 'getCookies') {
      chrome.cookies.getAll({ url: "https://www.gameplayus.com/" }, (cookies) => {
        sendResponse({ cookies });
      });
      return true;
    } else if (request.action === 'contentScriptLoaded') {
      console.log('Content script loaded on:', request.url, 'Title:', request.title);
      sendResponse({ received: true });
    } else if (request.action === 'getDOMFromActiveTab') {
      // Forward request to content script in active tab
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'getDOMInfo' }, (response) => {
            sendResponse(response);
          });
        } else {
          sendResponse({ error: 'No active tab found' });
        }
      });
      return true;
    } else if (request.action === 'getFacilityInfoFromActiveTab') {
      // Forward request to content script in active tab
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'getFacilityInfo' }, (response) => {
            sendResponse(response);
          });
        } else {
          sendResponse({ error: 'No active tab found' });
        }
      });
      return true;
    } else if (request.action === 'getTokenFromActiveTab') {
      // Forward request to content script in active tab
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'getRequestVerificationToken' }, (response) => {
            sendResponse(response);
          });
        } else {
          sendResponse({ error: 'No active tab found' });
        }
      });
      return true;
    } else if (request.action === 'injectFormDataToActiveTab') {
      // Forward request to content script in active tab
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(tabs[0].id, { 
            action: 'injectFormData', 
            data: request.data 
          }, (response) => {
            sendResponse(response);
          });
        } else {
          sendResponse({ error: 'No active tab found' });
        }
      });
      return true;
    } else if (request.action === 'submitFormInActiveTab') {
      // Forward request to content script in active tab
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(tabs[0].id, { 
            action: 'submitForm',
            formSelector: request.formSelector 
          }, (response) => {
            sendResponse(response);
          });
        } else {
          sendResponse({ error: 'No active tab found' });
        }
      });
      return true;
    } else if (request.action === 'getJSONDataFromActiveTab') {
      // Forward request to content script in active tab
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'getJSONData' }, (response) => {
            sendResponse(response);
          });
        } else {
          sendResponse({ error: 'No active tab found' });
        }
      });
      return true;
    } else if (request.action === 'refresh') {
      console.log('Received refresh request from content script');
      console.log("Forwarding refresh message to content script");
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'refresh' });
        }
      });
      sendResponse({ success: true });
    }
  });
}

// Handle extension icon click to open side panel
chrome.action.onClicked.addListener(async (tab) => {
  try {
    // Open the side panel for the current window
    await chrome.sidePanel.open({ windowId: tab.windowId });
    console.log('Side panel opened');
  } catch (error) {
    console.error('Failed to open side panel:', error);
  }
});
