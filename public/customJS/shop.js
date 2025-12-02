async function fetchProducts() {
  const file = "/products.json";
  
  try {
    const response = await fetch(file);

    const products = await response.json();

    // Call the rendering function to create HTML elements
    renderProducts(products.book);

  } catch (error) {
    console.error("Failed to fetch products data:", error);
    document.getElementById("products-container").innerHTML =
      `<p>Failed to load data. Please try again later.</p>`;
  }
}

function renderProducts(products) {
  const container = document.getElementById("products-container");
  container.innerHTML = ""; // Clear previous content if needed

  products.forEach(book => {

    const {
      name, 
      img,
      author,
      release,
      format,
      price
    } = book;

    const productCard = document.createElement("div");
    //productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${img}" alt="Image of ${name}" />
      <h3>${name}</h3>
      <p>${author}</p>
      <p>${release}</p>
      <p>${format}</p>
      <p>${price}</p>
    `;

    // Add this card to the page
    container.appendChild(productCard);
  });
}


// ---------------------------------------------------------------
// RUN THE PROGRAM
// ---------------------------------------------------------------
fetchProducts();