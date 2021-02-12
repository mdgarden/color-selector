// 16진수 두자리씩 끊어서 /R G B 0~255

const colorSelect = document.querySelector(".js-colorSelect"),
    colorInput = colorSelect.querySelector("Input"),
    colorList = document.getElementById("colorList"),
    container =  document.querySelector(".container"),
    secondPalatte =  document.querySelector(".secondPalatte");

let colorPalette = [];

function paintPalatte() {
    const colorListItem = document.querySelectorAll("li");
    colorListItem.forEach(li => {
        let listColor = li.getAttribute('id');
        li.style.backgroundColor = listColor;
    })
}

function deletePalatte() {
    colorPalette = [];
    const colorListItem = document.querySelectorAll("li");
    colorListItem.forEach(e => {
        e.remove();
    })
}

function generatePalette(num) {
    deletePalatte();
    for (let step = 0; step < num; step++) {
        let randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        colorPalette.push(randomColor);
        console.log(colorPalette);
    }
    colorPalette.forEach(color => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.setAttribute("id", color);
        span.innerText = color;
        li.appendChild(span);
        colorList.appendChild(li);
    });
    paintPalatte();
    // generateSecondPalatte(colorPalette);
}

// function generateSecondPalatte(colors) {
//     secondPalatte.classList.remove("is-hidden");
// }

function handleSubmit(event){
    event.preventDefault();
    const currentValue = colorInput.value;
    generatePalette(currentValue);
    colorInput.value = "" ;
}

function init() {
    colorSelect.addEventListener("submit", handleSubmit)
}

init();