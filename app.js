let input=document.querySelector(".input");
let clean=document.querySelector(".clear");
let end=document.querySelector(".end");
let lastNumber=document.querySelector(".left");
let final=document.querySelector(".final");
let plusMinus=document.querySelector(".negative");
let resule=document.querySelector("#calc");

function appendToshow(value){
    input.textContent += value
}

clean.addEventListener("click",function(){
    resule.style.display="none"
    input.textContent=""
    end.textContent=""
})

function last(){
    input.textContent=input.textContent.slice(0,-1)
}
plusMinus.addEventListener("click",function(){
    input.textContent= -(input.textContent);
})

function son(){
  resule.style.display="block";
  let calculate=eval(input.textContent);
  end.innerHTML=`
  <p class="end">${calculate}</p>
  `
}