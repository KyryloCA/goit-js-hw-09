!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),r=null;t.addEventListener("click",(function(){t.setAttribute("disabled",!0),r=setInterval((function(){return n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled",!1),clearInterval(r)}))}();
//# sourceMappingURL=01-color-switcher.d40feb74.js.map