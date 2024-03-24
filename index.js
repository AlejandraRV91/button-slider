
function slide(event) {
    let responsable=event.target
    if (responsable.id =="log-in-button") {
        //cambiar el color del texto
        responsable.classList.add("active")
        document.getElementById("sign-up-button").classList.remove("active")
        //cambiar el slider
        document.getElementById("slider").classList.remove("slider-left")
        document.getElementById("slider").classList.add("slider-right")
    }else{
        //cambiar el color del texto
        responsable.classList.add("active")
        document.getElementById("log-in-button").classList.remove("active")
        //cambiar el slider
        document.getElementById("slider").classList.remove("slider-right")
        document.getElementById("slider").classList.add("slider-left")
    }
}