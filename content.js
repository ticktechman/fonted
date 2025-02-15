chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.action === "changeFont") {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      /* 对所有元素生效，但排除 <code> 元素 */
      *:not(code) {
        font-family: sans-serif !important;
      }
    `;
    document.head.appendChild(styleEl);
  }
});

