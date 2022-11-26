let data = [
    {
        username: "Marys",
        password: "Marys12"
    },
    {
        username: "Arulselvi",
        password: "Arulselvi@15"
    },
    {
        username: "Arun",
        password: "Arun@300"
    },
    {
        username: "Mathan",
        password: "Mathan@g5"
    },
]
function login() {
    let userName = document.getElementById("username").value
    let passcode = document.getElementById("password").value

    for (i = 0; i < data.length; i++) {
        if (userName == data[i].username && passcode == data[i].password) {
            window.location.replace("home.html")
            return true;
        }
    }
    alert("Incorrect Login credential try again.")
}
function register() {
    var reg_username = document.getElementById("userName").value
    var reg_passcode = document.getElementById("password").value
    var confirm_passcode = document.getElementById("cnfirm_password").value
    if (reg_passcode == confirm_passcode) {
        var reg_data = {
            username: reg_username,
            password: reg_passcode
        }
    } else {
        alert("password doesn't match")
        return
    }

    for (i = 0; i < data.length; i++) {
        if (reg_username == data[i].username) {
            alert("Username not available")
            return false;
        }

        data.push(reg_data)
        window.location.replace("login.html");

    }
}
