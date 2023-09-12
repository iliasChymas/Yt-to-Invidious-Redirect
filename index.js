chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  window.location.replace("https://yt.artemislena.eu/watch?v=" + message.id)
  sendResponse("Cheers m8")
})
