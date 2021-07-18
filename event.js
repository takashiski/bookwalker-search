'use strict';
{
  chrome.runtime.onInstalled.addListener(()=>{
    const parent = chrome.contextMenus.create({
      id:"parent",
      title:"bookwalkerで検索",
      contexts:["selection"]
    });
  });
  chrome.contextMenus.onClicked.addListener((info,tab)=>{
    search(info,tab);
  });
  function search(info,tab){
    let url ="https://bookwalker.jp/search/?qcat=&word="+info.selectionText;
    chrome.tabs.create({url:url});
  }
}