// background.js

let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("chrome.storage : ", chrome.storage);
  console.log("Default background color set to %cgreen", `color: ${color}`);
});
