/*<div class="logo">
                <i class="fas fa-rocket"></i>
            </div>
            <div class="toggle">
                <i class="fas fa-bars ouvrir"></i>
                <i class="fas fa-times fermer"></i>
            </div>
            <div class="leftside"></div>*/
            let toogle = document.querySelector(".toogle");
            let body = document.querySelector("body");

            toogle.addEventListener("click", function(){
                body.classList.toggle("open")
            });