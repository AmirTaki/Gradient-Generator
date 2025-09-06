const colorOne = document.getElementById("color-a")
const colorTwo = document.getElementById("color-b")
const currentDirection = 'to bottom ';
const outputCode = document.getElementById('code') 

const submit = document.getElementById('submit')

function setDirection  (value,_this) {
    let directions = document.querySelectorAll(".buttons button")
    directions.forEach((item) => {
        item.classList.remove("active")
    });
    _this.classList.add("active")
    currentDirection = value
}


submit.addEventListener("click", () => {

        outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;

})

function generateCode ()  {
    console.log("ok")
}

function copyText () {
    outputCode.select();
    document.execCommand('copy')
    alert('Gradient Copied!')
}


// generateCode();