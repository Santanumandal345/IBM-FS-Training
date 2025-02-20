document.body.style.display="flex";
document.body.style.justifyContent="center";
document.body.style.alignItems="center";
document.body.style.height="100px";
document.body.style.backgroundColor="blue";


let cale=document.getElementById("cale");
cale.style.width="250px";
cale.style.padding="25px";
cale.style.backgroundColor="green";
cale.style.borderRadius="10px";
cale.style.textAlign="center";

let disp=document.getElementById("disp");
disp.style.width="100%";
disp.style.height="40px";
disp.style.fontSize="20px";
disp.style.marginBottom="10px";
disp.style.textAlign="right";

let buttanconter=document.getElementById("buttan");
buttanconter.style.display="grid";
buttanconter.style.gridTemplateColumns="repeat(4,1fr);
buttanconter.style.gap="5px";
let buttan = [
    "C","DE","e","/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", "00", ".", "=",
   
];
buttons.forEach(text => {
    let buttan = document.createElement("buttan");
    buttan.textContent = text;
    buttan.style.padding = "15px";
    buttan.style.fontSize = "18px";
    buttan.style.border = "none";
    buttan.style.cursor = "pointer";
    buttan.style.backgroundColor = "black";
    buttan.style.color = "yellow";
    buttan.style.borderRadius = "5px";
    buttan.addEventListener("click", () => buttonClick(text));
    buttanconter.appendChild(buttan);
});

