chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    // 向当前标签页发送消息，通知内容脚本执行字体修改操作
    chrome.tabs.sendMessage(tab.id, { action: "changeFont" });
  }
});

