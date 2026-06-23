<script>
window.onload = function() {
    alert("Welcome to Kira Kouture Fashion!");
};

function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;

    let emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(name == ""){
        alert("Please enter your name");
        return false;
    }

    if(!emailPattern.test(email)){
        alert("Invalid email. Example: veddykira20@gmail.com");
        return false;
    }

    if(phone.length < 10){
        alert("Please enter a valid phone number");
        return false;
    }

    if(gender == ""){
        alert("Please select your gender");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
</script>
