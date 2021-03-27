

(function embeddingSite() {
    setTimeout(() => {
      const targetElement = document.querySelector(".embedding-container")
      const embeddingLink = targetElement.dataset.src;
      console.dir(embeddingLink)
      const iframeElement = document.createElement('iframe')
      // iframeElement.src = "http://localhost:3000/quiz";
      iframeElement.src = embeddingLink
      iframeElement.frameborder="0"
      iframeElement.width='100%'
      iframeElement.height='100%'
      iframeElement.style.cssText = 'border:none;'
     
      targetElement.appendChild(iframeElement)
    }, 500)
})()


