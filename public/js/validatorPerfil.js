window.addEventListener("load", function() {

    let form = document.querySelector("#formUserEditar")

    form.addEventListener("submit", function(e){

        if(firstName.value == "" || lastName.value == "" || edad.value < 18 || birthdayEdad > mayor){
            
            e.preventDefault();

            swal("Campos sin completar", "", "error")   
        }

    })

})

let firstName = document.querySelector("#first_name")

firstName.addEventListener("blur", function(){

    if (firstName.value == "") {
        document.querySelector('.erroresFrontName').innerHTML = "* El campo es obligatorio"
    } else {
        document.querySelector('.erroresFrontName').innerHTML = ""
    }
    
})


let lastName = document.querySelector("#last_name");


lastName.addEventListener("blur", function(){

    if (lastName.value == "") {
        document.querySelector('.erroresFrontLastName').innerHTML = "* El campo es obligatorio"
    } else {
        document.querySelector('.erroresFrontLastName').innerHTML = ""
    }
    
})


let edad = document.querySelector("#age");



edad.addEventListener("blur", function(){

    if (edad.value < 18) {
        document.querySelector('.erroresFrontEdad').innerHTML = "* Tienes que ser mayor de edad"
    } else {
        document.querySelector('.erroresFrontEdad').innerHTML = ""
    }
    
})

let birthday = document.querySelector("#birthday");

let mayor = new Date(2004, 00, 00)

birthday.addEventListener("blur", function(){
    let birthdayEdad = new Date(birthday.value)

    if (birthdayEdad > mayor) {
        document.querySelector('.erroresFrontBirthday').innerHTML = "* Tienes que ser mayor de edad"
    } else {
        document.querySelector('.erroresFrontBirthday').innerHTML = ""
    }
    
})