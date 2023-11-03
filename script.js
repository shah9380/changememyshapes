const buttons = document.getElementById("buttons");

buttons.style.display = "flex";
buttons.style.flexDirection = "column";
buttons.style.gap = "20px";

const shape = document.getElementById("shape");

function randomNumber(min, max){
    return Math.random() * (max - min) + min ;
}

shape.style.borderRadius = "0%";
shape.style.height = "50%";
shape.style.width = "50%";
shape.style.backgroundColor = "rgb(167, 243, 53)";


const shapeChange = document.getElementById("shapechange");

let temp = 1;
let prevcol = 1;


shapeChange.addEventListener('click', () => {

shape.style.height = null;
shape.style.width = null;
shape.style.backgroundColor = "rgb(167, 243, 53)";
shape.style.transform = null;
shape.style.borderRadius = null;
shape.style.border = "none";

let sh = Math.floor(randomNumber(1, 6));
if(sh<5 && temp===sh){
    sh = sh+1;
}else if(sh>1 && temp===sh){
    sh = sh-1;
}

 switch(sh){
    case 1: //circle
        shape.style.borderRadius = "50%";
        shape.style.backgroundColor = "rgb(167, 243, 53)";
        shape.style.height = "50%";
        shape.style.width = "50%";
        document.getElementById("shapename").innerHTML = "Circle";
        break;
    case 2: //rectangel
        shape.style.height = "25%";
        shape.style.width = "50%";
        shape.style.backgroundColor = "rgb(167, 243, 53)";
        document.getElementById("shapename").innerHTML = "Rectangle";
        break;
    case 3:
        shape.style.width = "0px";
        shape.style.height = "0px";
        shape.style.borderLeft = "40px solid transparent";
        shape.style.borderRight = "40px solid transparent";
        shape.style.borderBottom = "80px solid rgb(167, 243, 53)";
        shape.style.backgroundColor = "transparent";
        document.getElementById("shapename").innerHTML = "Triangle";
        break;
    case 4:
        shape.style.height = "50%";
        shape.style.width = "50%";
        shape.style.transform =  "rotate(45deg)";
        document.getElementById("shapename").innerHTML = "Diamond";
        break;
    case 5:
        shape.style.height = "50%";
        shape.style.width = "50%";
        document.getElementById("shapename").innerHTML = "Square";
        break;
    }
    temp = sh;
});

const colorchange = document.getElementById("colorchange");
const main = document.getElementById("main");

main.style.backgroundColor = "rgb(253, 2, 2)";

colorchange.addEventListener('click', () => {
    let co = Math.floor(randomNumber(1, 11));

    if(co<10 && prevcol === co){
        co = co+1;
    }else if(co>1 && prevcol === co){
        co = co-1;
    }
    switch(co){
        case 1:
            main.style.backgroundColor = "rgb(40, 56, 119)";
            break;
        case 2:
            main.style.backgroundColor = "rgb(221, 154, 53)";
            break;
        case 3:
            main.style.backgroundColor = "rgb(182, 221, 53)";
            break;
        case 4:
            main.style.backgroundColor = "rgb(53, 221, 168)";
            break;
        case 5:
            main.style.backgroundColor = "rgb(53, 187, 221)";
            break;
        case 6:
            main.style.backgroundColor = "rgb(185, 53, 221)";
            break;
        case 7:
            main.style.backgroundColor = "rgb(183, 105, 118)";
            break;
        case 8:
            main.style.backgroundColor = "rgb(221, 53, 190)";
            break;
        case 9:
            main.style.backgroundColor = "rgb(240, 227, 139)";
            break;
        case 10:
            main.style.backgroundColor = "rgb(253, 2, 2)";
            break;
    }
    prevcol = co;
});

