let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// const counterNum = document.querySelectorAll(".counter-numbers");

// const speed = 200;

// counterNum.forEach(curElem)=>{
//     const updateNumber = () =>{
//         const targetNumber = parent( curElem.dataset.number);
//     }
// }
// // console.log(targetNumber);

// const initialum = parseInt(curElem.innertext);
// // console.log(initialum);

// const incrementNumber = Math.trunc(targetNumber / speed);
// // console.log(incrementNumber);


// if (initialum< targetNumber){
//     curElem.innertext=`${initialum + incrementNumber}+`;
//     setTimeout(updateNumber>10);
// }

let yourname = document.getElementById("yourname");
let number = document.getElementById("number");
let email = document.getElementById("email");
let address = document.getElementById("address");

function validatefrom(){
  
}