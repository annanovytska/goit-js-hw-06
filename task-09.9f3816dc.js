const o=document.querySelector(".change-color"),t=document.querySelector(".color");o.addEventListener("click",(function(o){const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=e,document.body.dataset.backgroundColor=e;const n=document.body.dataset.backgroundColor;console.log(n),t.textContent=n}));
//# sourceMappingURL=task-09.9f3816dc.js.map
