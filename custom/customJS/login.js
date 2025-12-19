async function fetchUser() {
  const file = "/userDetails.json";
  
  try {
    const response = await fetch(file);

    const user = await response.json();

    // Call the rendering function to create HTML elements
    return user.user1;

  } catch (error) {
    console.error("Failed to fetch products data:", error);
    document.getElementById("errorBox").innerHTML =
      `<p>Failed to load data. Please try again later.</p>`;
  }
}



document.getElementById("login").addEventListener("click", async() => {

    const user = await fetchUser();
    if(document.getElementById("password").value == user.password && document.getElementById("name").value == user.name)
    {
        localStorage.setItem("loggedIn", "1");
    }
    else
    {
        localStorage.setItem("loggedIn", "0");
    }
    location.reload();
});