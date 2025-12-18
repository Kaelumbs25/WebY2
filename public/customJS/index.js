function cartNum(){
    if(localStorage.getItem("cart") != null){
        document.getElementById("cartBadge").innerHTML = localStorage.getItem("cart");
    }
    else{
        document.getElementById("cartBadge").innerHTML = 0;
    }
}
cartNum();