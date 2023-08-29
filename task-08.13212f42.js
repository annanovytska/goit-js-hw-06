const e=document.querySelector(".login-form");console.dir(e),e.addEventListener("submit",(function(o){o.preventDefault();const s=e.elements.email.value,t=e.elements.password.value;if(""===s||""===t)alert("Всі поля повинні бути заповненні");else{const o={email:s,password:t};e.reset(),console.log(o)}}));
//# sourceMappingURL=task-08.13212f42.js.map
