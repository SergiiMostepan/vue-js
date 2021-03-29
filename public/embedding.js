

function embeddingSite() {

    const targetElement = document.querySelector(".embedding-container")
    const embeddingLink = targetElement.dataset.src;
  
    const iframeElement = document.createElement('iframe')
    iframeElement.src = embeddingLink
    iframeElement.frameborder="0"
    iframeElement.width='100%'
    iframeElement.height='100%'
    iframeElement.style.cssText = 'border:none;'
   
    targetElement.appendChild(iframeElement)
}

function detach() {
  if(document.addEventListener) {
    document.removeEventListener("DOMContentLoaded", DOMready);
  }
}


function DOMready() {
  console.log('DOM готов');
  embeddingSite();
  detach();
}

document.addEventListener("DOMContentLoaded", DOMready);


