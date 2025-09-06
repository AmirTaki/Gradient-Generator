const colorOne = document.getElementById("color-a")
const colorTwo = document.getElementById("color-b")
const currentDirection = 'to bottom';
const outputCode = document.getElementById('code') 


const setDirection = (value,_this) =>{
    let directions = document.querySelectorAll(".buttons button")
    directions.forEach((item) => {
        item.classList.remove("active")
    });
    _this.classList.add("active")
    currentDirection = value
}

const generateCode = () => {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}