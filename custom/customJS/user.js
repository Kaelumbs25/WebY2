async function fetchUser() {
  const file = "/userDetails.json";
  
  try {
    const response = await fetch(file);

    const user = await response.json();

    if(localStorage.getItem("loggedIn")=="1")
    {
        fillOutDetails(user.user1);
    }
    

  } catch (error) {
    console.error("Failed to fetch products data:", error);
    document.getElementById("errorBox").innerHTML =
      `<p>Failed to load data. Please try again later.</p>`;
  }
}

function fillOutDetails(user)
{
    document.getElementById("name").textContent = user.name;
    document.getElementById("address").textContent = user.postcode;
    document.getElementById("phone").textContent = user.phone;
    document.getElementById("email").textContent = user.email;
}



fetchUser();
