// Form
const form = document.querySelector(".form")

// Inputs
const nameInput = document.getElementById("name")

const mailInput = document.getElementById("email")

const telInput = document.getElementById("tel")

// Submit button
const submitButton = document.getElementById("submitButton")

form.addEventListener("submit", e => {
    e.preventDefault();
    let name = nameInput.value
    let email = mailInput.value
    let tel = telInput.value
    
    let data = {
        name,
        email,
        tel
    }

    let convertedData = JSON.stringify(data)

    let content = document.querySelector(".registration-form")

    localStorage.setItem("user",convertedData)

    let gifHtml = `<img src = 'https://media.giphy.com/media/IzgHrkW93gL1rPqgrV/giphy.gif' style = "justify-content: center; width: 50%" />`

    let doneHtml = `<h2 style = "justify-content:center">Cadastro feito com sucesso!</h2>` 
    content.innerHTML = gifHtml

    setTimeout(() => {
        content.innerHTML = doneHtml
    }, 2000)
    


    form.reset()  

})