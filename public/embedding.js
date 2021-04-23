

function embeddingSite() {

  const targetElement = document.querySelector(".embedding-container")
  const embeddingLink = targetElement.dataset.src;

  const iframeElement = document.createElement('iframe')
  iframeElement.src = embeddingLink
  iframeElement.frameborder="0"
  iframeElement.width='100%'
  iframeElement.height='100%'
  iframeElement.allow="clipboard-write"
  iframeElement.style.cssText = 'border:none;'
  // console.dir(iframeElement)
  
  
  targetElement.appendChild(iframeElement);

  // const iframeHead = iframeElement.contentWindow.document.querySelector('head')
  // const iframeBody = iframeElement.contentWindow.document.querySelector('body')
  // console.log(iframeHead)
  // console.log(iframeBody)

  // const GTMIframe0 = `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  // })(window,document,'script','dataLayer','GTM-TJNGKMR');</script>`
  // const GTMIframe1 = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TJNGKMR"
  // height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
 
  // iframeHead.insertAdjacentHTML("beforeend", GTMIframe0);
  // iframeBody.insertAdjacentHTML("beforeend", GTMIframe1);

  const GTMElement = document.createElement('script')
  GTMElement.async = true;
  // GTMElement.src = "https://www.googletagmanager.com/gtag/js?id=G-Q6PT8FNCR7"
  // GTMElement.src = "https://www.googletagmanager.com/gtag/js?id=G-CT35TVTPBG"
  // GTMElement.src = "https://www.googletagmanager.com/gtag/js?id=GTM-TJNGKMR"
  targetElement.appendChild(GTMElement)

  // const GTMElementPartner = document.createElement('script')
  // GTMElementPartner.async = true;
  // GTMElementPartner.src = "https://www.googletagmanager.com/gtag/js?id=G-XTN0308QYC"
  // targetElement.appendChild(GTMElementPartner)


  window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());

  // gtag('config', 'G-Q6PT8FNCR7', {
  // gtag('config', 'G-CT35TVTPBG');

  // gtag('config', 'G-XTN0308QYC', {
  //   'page_title' : 'widget',
  //   'page_path': '/widget'
  // });
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
  // add google tag manager

    // (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    // })(window,document,'script','dataLayer','GTM-KW64XTB');
}



document.addEventListener("DOMContentLoaded", DOMready);


