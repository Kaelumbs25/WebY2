async function fetchUser() {
  const file = "/userDetails.json";
  
  try {
    const response = await fetch(file);

    const user = await response.json();

    if(localStorage.getItem("loggedIn")==1)
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
    document.getElementById("username").value = user.name;
    document.getElementById("address").value = user.address;
    document.getElementById("phone").value = user.phone;
    document.getElementById("email").value = user.email;
}



fetchUser();

document.getElementById("orderBtn").addEventListener("click", () =>{
    let loggedIn = localStorage.getItem("loggedIn");
    localStorage.clear();
    localStorage.setItem("loggedIn", "loggedIn");
});