

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
  GTMElement.src = "https://www.googletagmanager.com/gtag/js?id=G-Q6PT8FNCR7"
  targetElement.appendChild(GTMElement)

  const GTMElementPartner = document.createElement('script')
  GTMElementPartner.async = true;
  GTMElementPartner.src = "https://www.googletagmanager.com/gtag/js?id=G-X3H1XBNYBC"
  targetElement.appendChild(GTMElementPartner)

  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','G-Q6PT8FNCR7');

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q6PT8FNCR7', {
      'page_title' : 'widget',
      'page_path': '/widget'
    });

  // gtag('config', 'UA-85710133-1', {
  gtag('config', 'G-X3H1XBNYBC', {
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


