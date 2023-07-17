window.addEventListener("scroll", function(){
    const header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameLimit = 30;
const subjectLimit = 50;
const messageLimit = 500;

nameInput.addEventListener("input", function(){
    const nameLength = nameInput.value.length;
    const errorName = document.querySelector(".error-name");

    if (nameLength > nameLimit) {
        errorName.innerText = "El nombre es demasiado largo";
        errorName.style.fontSize = "10px";
        errorName.style.color = "#FF2851"
    } else {
        errorName.innerText = "";
    }
})

subjectInput.addEventListener("input", function(){
    const subjectLength = subjectInput.value.length;
    const errorSubject = document.querySelector(".error-subject");

    if (subjectLength > subjectLimit) {
        errorSubject.innerText = "El asunto es demasiado largo";
        errorSubject.style.fontSize = "10px";
        errorSubject.style.color = "#FF2851"
    } else {
        errorSubject.innerText = "";
    }
})

messageInput.addEventListener("input", function(){
    const messageLength = messageInput.value.length;
    const errorMessage = document.querySelector(".error-message");

    if (messageLength > messageLimit) {
        errorMessage.innerText = "El mensaje es demasiado largo";
        errorMessage.style.fontSize = "10px";
        errorMessage.style.color = "#FF2851"
    } else {
        errorMessage.innerText = "";
    }
})

const btn = document.querySelector(".contacto__btn");

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    if (nameInput.value != '' &&
        emailInput.value != '' &&
        subjectInput.value != '' &&
        messageInput.value != '' &&
        nameInput.value.length <= nameLimit &&
        subjectInput.value.length <= subjectLimit &&
        messageInput.value.length <= messageLimit) {
    
        const serviceID = "service_oov8x9b";
        const templateID = "template_7404n32";
    
        emailjs.sendForm(serviceID, templateID, this).then(() => {
            alert("Mensaje enviado");
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';
        })
        .catch(error => {
            console.log(error);
        })
    } else {
        alert("El mensaje no pudo enviarse. Por favor revisa los campos!");
    }
})