!function(){var t,e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");e.disabled=!1,d.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,d.disabled=!1,t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3)})),d.addEventListener("click",(function(){e.disabled=!1,d.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.0c327bfd.js.map
