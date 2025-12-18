function cartNum(){
    if(localStorage.getItem("cart") != null){
        document.getElementById("cartBadge").innerHTML = localStorage.getItem("cart");
    }
    else{
        document.getElementById("cartBadge").innerHTML = 0;
    }
}
cartNum();

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("loggedIn") != 1){
        document.getElementById("userDetails").style.display = "none";
        document.getElementById("logIn").style.display = "block";
        document.getElementById("logOut").style.display = "none";
    }
    else{
        document.getElementById("userDetails").style.display = "block";
        document.getElementById("logIn").style.display = "none";
        document.getElementById("logOut").style.display = "block";
    }
});

document.getElementById("logOut").addEventListener("click", () =>{
    localStorage.setItem("loggedIn", 0);
    location.reload();
});