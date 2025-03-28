chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.action === "changeFont") {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      /* 对所有元素生效，但排除 <code> 元素 */
      *:not(code):not(code *) {
        font-family: sans-serif !important;
      }
    `;
    document.head.appendChild(styleEl);
  }
  document.querySelectorAll("table .weui-desktop-simple-appmsg__thumb").forEach(el => {
      el.style.paddingBottom = "40px";
      el.style.width = "80px";
  });
  document.querySelectorAll("table td").forEach(el => {
    el.style.padding = "6px";
  });
  document.querySelectorAll(".weui-desktop-mass__content .weui-desktop-mass-appmsg__thumb").forEach(el => {
    el.style.width = el.style.height = "40px";
  });
  document.querySelectorAll(".weui-desktop-mass__content .weui-desktop-mass__overview").forEach(el => {
    el.style.minHeight = "0px";
  });
  document.querySelectorAll(".publish_content div.weui-desktop-block").forEach(el => {
    el.style.marginBottom = "4px";
  });
  document.querySelectorAll(".weui-desktop-block .weui-desktop-block__main").forEach(el => {
    el.style.paddingTop = el.style.paddingBottom = "4px";
  });
  document.querySelectorAll("li.weui-desktop-sub-menu__item a").forEach(el => {
    if (el.href.includes("count=")) {
        el.href = el.href.replace(/(count=)\d+/, "$1100");
    }
  });
});

