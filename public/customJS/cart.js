async function fetchProducts() {
  const file = "/products.json";
  
  try {
    const response = await fetch(file);

    const products = await response.json();

    // Call the rendering function to create HTML elements
    renderPage(products.books);

  } catch (error) {
    console.error("Failed to fetch products data:", error);
    document.getElementById("products-container").innerHTML =
      `<p>Failed to load data. Please try again later.</p>`;
  }
}

function renderPage(books) {
  const container = document.getElementById("products-container");
  container.innerHTML = ""; // Clear previous content if needed

  console.log(books);

  Object.keys(localStorage).forEach(key => {
    const id = Number(key);
    if(key !== "cart")
    {
        const book = books[key];

        const {
          name,
          img,
          author,
          release,
          format,
          price,
          id
        } = book;

        console.log(book)

        const productCard = document.createElement("div");
        productCard.setAttribute("class", "row productCard text-secondary");
        

        productCard.innerHTML = `
          <div class="col-6">
          <img src="${img}" alt="Image of ${name}">
          </div>
          <div class="col-6">
          <h3>${name}</h3>
          <p>${author}</p>
          <p>${release}</p>
          <p>${format}</p>
          <p>${price}</p>
          <p>Quantity: </p>         
          <label for="quantity">Quantity:</label>
          <input type="number" class="counter" id="quantity" name="quantity" min="1" value="${localStorage.getItem(`${key}`)}">
          <button type="button" id="${key}" class="btn btn-success">Set</button>
          </div>
          
        `;

        // Add this card to the page
        container.appendChild(productCard);
        productCard.classList.add("gy-4");

        document.getElementById(key).addEventListener("click", () => {

            let newQuantity = 0;
            const quantList = document.querySelectorAll(".counter");
            for (let i = 0; i < quantList.length; i++) {
              newQuantity += Number(quantList[i].value);
            }

            localStorage.setItem("cart", newQuantity);
            localStorage.setItem(key, document.getElementById("quantity").value)
            document.getElementById("cartBadge").innerHTML = localStorage.getItem("cart");
            calcCost(books);
        });
    }
  });
    
  calcCost(books)
  
}

function calcCost(books){
      let total = 0;
  Object.keys(localStorage).forEach(key => {
    if(key!=="cart")
    {
    const book = books[key];

        const {
          name,
          img,
          author,
          release,
          format,
          price,
          id
        } = book;
    
    total+=book.price*Number(localStorage.getItem(key));
    
    }
  });
  total = total.toFixed(2);

  document.getElementById("totalCost").innerHTML= `€${total}`;
}

// ---------------------------------------------------------------
// RUN THE PROGRAM
// ---------------------------------------------------------------
fetchProducts();