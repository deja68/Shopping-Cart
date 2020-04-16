let form = document.querySelector("#form");
let productName = document.getElementById("productName");
let productDescription = document.querySelector("#productDescription");
let productImg = document.querySelector("#productImg");
let productPrice = document.querySelector("#productPrice");


let addBtn = document.querySelector("#add");

addBtn.addEventListener('click', function(e){
  e.preventDefault();
  localStorage.setItem('productName', productName.value);
  localStorage.setItem('productDescription', productDescription.value);
  localStorage.setItem('productImg', productImg.value);
  localStorage.setItem('productPrice', productPrice.value);
  
  let product = document.createElement("product");
  product.className = "product";

  let image = document.createElement("img");
  image.src = productImg.src;
  product.appendChild(image);

  let name = document.createElement("p");
  name.innerHTML = productName.value;
  product.appendChild(name);

  let price = document.createElement("p");
  price.innerHTML = "$" + productPrice.value;
  product.appendChild(price);

  let details = document.createElement("button");
  details.className = "details-button";
  details.innerHTML = "Details";
  product.appendChild(details);
  details.addEventListener('click', openModal);
 
  let buyBtn = document.createElement("button");
  buyBtn.className = "buy-button";
  buyBtn.innerHTML = "Buy";
  product.appendChild(buyBtn);

  document.querySelector(".list-products").appendChild(product);

});


// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementsByClassName("details-button");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

function openModal(){
  let header = document.getElementById("header");
    header.innerHTML = productName.value;

    let modalImg = document.getElementById("modalImg");
    modalImg.src = productImg.value;

    let footer = document.getElementById("footer");
    footer.innerHTML = productDescription.value;

    modal.style.display = "block";
}  

// when clicked on details button (one that belongs to a product from html) open Modal Window 
for (let i = 0; i < btn.length; i++){
  // When the user clicks the button, open the modal 
  btn[i].onclick = function() {
    let header = document.getElementById("header");
    let lpName = document.getElementsByClassName("lpName");
    console.log(lpName);
    header.innerHTML = lpName[i].innerHTML;

    let modalImg = document.getElementById("modalImg");
    let lpImg = document.getElementsByClassName("lpImg");
    modalImg.src = lpImg[i].src;

    let footer = document.getElementById("footer");
    let price = document.getElementsByClassName("price");
    footer.innerHTML = price[i].innerHTML;
    
    modal.style.display = "block";
    
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}

// When the user clicks on Buy btn, the product is added to the 3rd column
const buyBtn = document.getElementsByClassName("buy-button");
for ( let i = 0; i < buyBtn.length; i++ ){
  buyBtn[i].addEventListener('click', function(){
      let productInfo = document.createElement("div");
      productInfo.className = "product-info";

      let product = document.createElement("div");
      product.className = "product";

      let firstEl= document.createElement("h3");
      const prodName = document.getElementsByClassName("prodName");
      firstEl.innerHTML = prodName[i].innerHTML;
      
      let secondEl= document.createElement("p");
      const prodPrice = document.getElementsByClassName("prodPrice");
      secondEl.innerHTML = prodPrice[i].innerHTML;

      product.appendChild(firstEl);
      product.appendChild(secondEl);

      let img = document.createElement("img");
      const prodImg = document.getElementsByClassName("prodImg");
      img.src = prodImg[i].src;      

      productInfo.appendChild(product);
      productInfo.appendChild(img);

      let productCount = document.createElement("div");
      productCount.className = "product-count";

      let btnMinus = document.createElement("button");
      btnMinus.innerHTML = "-";

      let spanNumber = document.createElement("span");
      spanNumber.innerHTML = "1";

      let btnPlus = document.createElement("button");
      btnPlus.innerHTML = "+";

      productCount.appendChild(btnMinus);
      productCount.appendChild(spanNumber);
      productCount.appendChild(btnPlus);

      let shopCartProd = document.querySelector(".shopping-cart-product");
      shopCartProd.appendChild(productInfo);
      shopCartProd.appendChild(productCount);
  });
}

