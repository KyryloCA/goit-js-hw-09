const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let o=null;t.addEventListener("click",(function(){t.setAttribute("disabled",!0),o=setInterval((()=>r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled",!1),clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.321bfef7.js.map