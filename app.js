const myForm = document.querySelector(".my-form")
const formText = document.querySelector(".form-text")
const nameInput = document.getElementById("name-input")
const mailInput = document.getElementById("mail-input")
const btn = document.querySelector(".btn")
const list = document.querySelector(".list")

myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === "" && mailInput.value === ""){
        formText.classList.add("red");
        formText.textContent = "Name and mail inputs can't be empty"
    } else if(nameInput.value === ""){
        formText.classList.remove("green");
        formText.classList.add("red");
        formText.textContent = "Name input can't be empty"
    } else if(mailInput.value === ""){
        formText.classList.remove("green");
        formText.classList.add("red");
        formText.textContent = "Mail input can't be empty"
    } else{
        formText.classList.remove("red");
        formText.classList.add("green");
        formText.textContent = "Submited!";

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value}: ${mailInput.value}`));
        list.appendChild(li);

        mailInput.value = "";
        nameInput.value = "";
    }
}

