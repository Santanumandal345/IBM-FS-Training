document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "black";

let calculator = document.getElementById("calculator");
calculator.style.width = "250px";
calculator.style.padding = "20px";
calculator.style.backgroundColor = "blue";
calculator.style.borderRadius = "10px";
calculator.style.textAlign = "center";

let display = document.getElementById("display");
display.style.width = "100%";
display.style.height = "40px";
display.style.fontSize = "20px";
display.style.marginBottom = "10px";
display.style.textAlign = "right";

let buttonsContainer = document.getElementById("buttons");
buttonsContainer.style.display = "grid";
buttonsContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
buttonsContainer.style.gap = "5px";

let buttons = [
    "C","DE","%","/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", "00", ".", "=",
   
];

buttons.forEach(text => {
    let button = document.createElement("button");
    button.textContent = text;
    button.style.padding = "15px";
    button.style.fontSize = "18px";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.backgroundColor = "black";
    button.style.color = "yellow";
    button.style.borderRadius = "5px";
    button.addEventListener("click", () => buttonClick(text));
    buttonsContainer.appendChild(button);
});
function buttonClick(value) {
    if (value === "C") {
        display.value = "";
    } else if (value === "=") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    } else if (value === "DE") {
        display.value = display.value.slice(0, -1);
    } else if (value== "%"){
        display.value = display.value/100;
    }
    else if (value === "ROOT") {
        display.value = Math.sqrt(parseFloat(display.value)).toString();
    } else {
        display.value += value;
    }
}

