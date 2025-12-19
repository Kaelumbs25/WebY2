async function fetchProducts() {
  const file = "/products.json";
  
  try {
    const response = await fetch(file);

    const products = await response.json();

    // Call the rendering function to create HTML elements
    renderProducts(products.books);

  } catch (error) {
    console.error("Failed to fetch products data:", error);
    document.getElementById("products-container").innerHTML =
      `<p>Failed to load data. Please try again later.</p>`;
  }
}

function renderProducts(books) {
  const container = document.getElementById("products-container");
  container.innerHTML = ""; // Clear previous content if needed

  for (const key in books) {
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

    if(id==0 || Number(id)%2==0){

    const productCard = document.createElement("div");
    productCard.setAttribute("class", "col-12 col-md-6 col-lg-4 col-xl-3 productCard");
    

    productCard.innerHTML = `
      <a class="text-decoration-none d-flex " href="product/${id}">
      <img class="w-50 h-50 " src="${img}" alt="Image of ${name}" />
      <div>
      <h4>${name}</h4>
      <p>By ${author}</p>
      <p>Released: ${release}</p>
      <p>${format}</p>
      <p>€${price}</p>
      
      </div>
      </a>
    `;

    // Add this card to the page
    container.appendChild(productCard);
    productCard.classList.add("gy-4");
  };
  }
}


// ---------------------------------------------------------------
// RUN THE PROGRAM
// ---------------------------------------------------------------
fetchProducts();