

function embeddingSite() {

  const targetElement = document.querySelector(".embedding-container")
  const embeddingLink = targetElement.dataset.src;

  const iframeElement = document.createElement('iframe')
  iframeElement.src = embeddingLink
  iframeElement.frameborder="0"
  iframeElement.width='100%'
  iframeElement.height='100%'
  iframeElement.style.cssText = 'border:none;'
  
  targetElement.appendChild(iframeElement);
  

  const GTMElement = document.createElement('script')
  GTMElement.async = true;
  GTMElement.src = "https://www.googletagmanager.com/gtag/js?id=UA-85710133-1"
  targetElement.appendChild(GTMElement)

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-85710133-1', {
    'page_title' : 'widget',
    'page_path': '/widget'
  });
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


