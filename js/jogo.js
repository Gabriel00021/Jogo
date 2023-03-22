const cuphead = document.querySelector(".cuphead");
const obstaculo = document.querySelector(".obstaculo");

const pulo = ()=>{
    cuphead.classList.add("pular")
    setTimeout(()=>{
        cuphead.classList.remove("pular")
    },800)
}

document.addEventListener("keydown",pulo);