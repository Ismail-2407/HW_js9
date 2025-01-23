const contentDiv = document.getElementById("content");
contentDiv.innerHTML = `
     <ul>
         <li><a href="index.html">index.html</a></li>
         <li><a href="http://google.com">http://google.com</a></li>
         <li><a href="https://itstep.org">https://itstep.org</a></li>
         <li><a href="https://mystat.itstep.org">https://mystat.itstep.org</a></li>
         <li><a href="/images/cat.jpg">/images/cat.jpg</a></li>
         <li><a href="/local/path">/local/path</a></li>
     </ul>
 `;

const links = contentDiv.querySelectorAll("a");
links.forEach((link) => {
  if (link.href.startsWith("http://") || link.href.startsWith("https://")) {
    link.style.textDecoration = "underline dotted";
  }
});
