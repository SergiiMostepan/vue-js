

(function embeddingSite() {
    console.log('work')
    setTimeout(() => {
      const targetElement = document.querySelector(".embedding-container")
     
      const iframeElement = document.createElement('iframe')
      // iframeElement.src = "http://localhost:3000/quiz";
      iframeElement.src = "http://localhost:3000/business"
      iframeElement.frameborder="no"
      iframeElement.width='100%'
      iframeElement.height='500px'
     
      targetElement.appendChild(iframeElement)
    }, 500)
   
})()


