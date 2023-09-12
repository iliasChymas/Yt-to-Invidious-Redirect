chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  
    if (tab.url.includes("youtube.com/watch?")){
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['index.js']
      })
      console.log("changed to: ", tab.url)

      
      setTimeout(() => {
        const id = tab.url.split("=")[1].slice(0, 11) || "dUs3Vm19QLo";
        chrome.tabs.sendMessage(
          tabId,
          {type: "redirect", id: id},
          (response) => {
            console.log(response);
          }
        )
      }, 2000)
    }
})