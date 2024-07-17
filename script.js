const tabBtn = document.querySelectorAll(".tab");
const tab =document.querySelectorAll(".tabShow");
function tabs(panelIndex){
    tab.forEach(function(node){
        node.style.display = "none";
    });
    tab[panelIndex].style.display="block";
}
tabs(0);
var mainimg= document.getElementById("mainimg");
var smallimg=document.getElementsByClassName("small-img");

            smallimg[0].onclick = function(){
                mainimg.src = smallimg[0].src;
             }
             smallimg[1].onclick = function(){
                mainimg.src=smallimg[1].src;
             }
             smallimg[2].onclick = function(){
                mainimg.src=smallimg[2].src;
             }
             smallimg[3].onclick = function(){
                mainimg.src=smallimg[3].src;
             }
             let signup = document.getElementById("signup");
      let signin = document.getElementById("signin");
      let nameField = document.getElementById("nameField");
      let title = document.getElementById("title");
    
    signin.onclick = function(){
        nameField.style.maxHeight= "-2";
        title.innerHTML = "Sign in";
        signup.classList.add("disable");
        signin.classList.remove("disable");
    }
    signup.onclick = function(){
        nameField.style.maxHeight= "60px";
        title.innerHTML = "Sign up";
        signup.classList.remove("disable");
        signin.classList.add("disable");
    }