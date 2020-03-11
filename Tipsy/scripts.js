//Adam Prinz
//JavaScript for Tipsy.com
//Copyright ©2017




function addToCart() {

    var color = document.getElementById("color").value;
    var size = document.getElementById("size").value;
    var quantity = document.getElementById("quantity").value;
    var image = document.getElementById("image").src;

    //Add item to the local storage
    localStorage.setItem("Color", color);
    localStorage.setItem("Size", size);
    localStorage.setItem("Quantity", quantity);
    localStorage.setItem("Image", image);
}

function remove() {
    localStorage.clear();
    location.reload();
}

window.onload = function() {
    
    //Add item to cart.html
    var cart = document.getElementById("cart");
    var items = document.getElementById("items");
    var addBtn = document.getElementById("addToCart");
    

    if (items) {
        addBtn.onclick = addToCart;
    } 
    
    else if (cart) {

        if (localStorage.getItem("Quantity") != null) {

            var section = document.querySelectorAll("section");
            section[1].setAttribute("class" , "item");
            section[1].innerHTML = "Color: " + localStorage.getItem("Color");
            section[1].innerHTML += "<br>" + "Size: " +  localStorage.getItem("Size");
            section[1].innerHTML += "<br>" + "Quantity: " +  localStorage.getItem("Quantity");
            section[1].innerHTML += "<img src= '" + localStorage.getItem("Image") + " ' alt='Thumbnail' >";
            section[1].innerHTML += "<br>" + "<a onclick='remove()'>remove Item</a>";

            section[2].style.display = "block";

        } else {
            return;
        }

    } else {
        return;
    }

}