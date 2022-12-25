function validateInput() {
    var city = document.getElementById("city");
    var cityError = document.getElementById("cityError");
    var street = document.getElementById("street");
    var streetError = document.getElementById("streetError");
    var name = document.getElementById("Name");
    var nameError = document.getElementById("nameError");
    var provience = document.getElementById("provience");
    var proError = document.getElementById("proError");
    var radioError = document.getElementById("radioError");
    cityError.innerHTML = "";
    nameError.innerHTML = "";
    streetError.innerHTML = "";
    proError.innerHTML = "";

    if (name.value.trim() == "") {
        nameError.innerHTML = "invalid name !";
        return false;
    }
    if (street.value.trim() == "") {
        streetError.innerHTML = "invalid street !";
        return false;
    }
    if (city.value.trim() == "") {
        cityError.innerHTML = "invalid city !";
        return false;
    }
    if (provience.value.trim() == "") {
        proError.innerHTML = "invalid provience !";
        return false;
    }

    var check = false;
    for (var i = 0; i < 3; i++) {
        if (document.contactMe.reason[i].checked) {
            check = true;
        }
    }
    if (!check) {
        radioError.innerHTML = "atleast one option must be selected !";
        return false;
    }


    return true;
}