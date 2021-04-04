function addUser()
{
    var user_name = document.getElementById("user_name").value;

    console.log("Var user_name is declared")

    localStorage.setItem("user_name", user_name);

    window.location = "Login_room.html";
}