!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),r=document.querySelector(".form");r.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,o=Number(n.step.value),t=Number(n.amount.value),a=Number(n.delay.value),c=1,l=setInterval((function(){if(t<=0)return clearInterval(l);var e,n,r;(e=c,n=a,r=Math.random()>.3,new Promise((function(o,t){setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms")),i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms")),i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),c+=1,t-=1,a+=o}),0);r.reset()}))}();
//# sourceMappingURL=03-promises.b967b828.js.map