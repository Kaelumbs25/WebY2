async function fetchProduct() {
  const file = "/products.json";
  
  try {
    const response = await fetch(file);

    const products = await response.json();

    const container = document.getElementById("container");
    const id = container.classList[0];

    // Call the rendering function to create HTML elements
    renderProducts(products.books[id]);

  } catch (error) {
    console.error("Failed to fetch products data:", error);
    document.getElementById("products-container").innerHTML =
      `<p>Failed to load data. Please try again later.</p>`;
  }
}

function renderProducts(book) {
  const container = document.getElementById("container");

  console.log(book)

  const productCard = document.createElement("div");
  productCard.setAttribute("class", "row d-flex");
    

  productCard.innerHTML = `
    <div class="col-12 col-md-4 col-lg-6 text-center" >
        <img class="productImg " src="${book.img}" alt="Image of ${book.name}" />
    </div>
    <div class="col-12 col-md-8 col-lg-6">
    <h2>${book.name}</h3>
    <h3>By ${book.author}</h3>
    <p>Released in ${book.release}</p>
    <div class="d-flex">
        <a href="/product/${String(Number(book.id)+1)}" class="btn" id="PB">Paperback</a>
        <a href="/product/${String(Number(book.id)-1)}" class="btn" id="HB">Hardback</a>
    </div>
    <p>${book.price}</p>
    <button>Add to Cart</button>
    </div
    
    `;
  // Add this card to the page
  container.appendChild(productCard);

  if(book.format == "paperback")
    {
        document.getElementById("PB").classList.add("disabled");
    }
    else
    {
        document.getElementById("HB").classList.add("disabled");
    }
}


// ---------------------------------------------------------------
// RUN THE PROGRAM
// ---------------------------------------------------------------
fetchProduct();