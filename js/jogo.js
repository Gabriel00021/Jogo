const cuphead = document.querySelector(".cuphead");
const obstaculo = document.querySelector(".obstaculo");
const gameOver = document.querySelector(".gameOver")

const pulo = ()=>{
    cuphead.classList.add("pular")
    setTimeout(()=>{
        cuphead.classList.remove("pular")
    },800)
}

const loop = setInterval(() => {
    const obstaculoPosition = obstaculo.offsetLeft;
    const cupheadPosition = +window.getComputedStyle(cuphead).bottom.replace('px', '')

    console.log(cupheadPosition)
    if(obstaculoPosition <= 100 && obstaculoPosition > 0 && cupheadPosition <= 100){

        obstaculo.style.animation = 'none'
        obstaculo.style.left = `${obstaculoPosition}px`;
    
        cuphead.style.anymation = 'none'
        cuphead.style.left = `${cupheadPosition}px`

       // gameOver.classList.remove(".apagar");

        clearInterval(loop);
    }
}, 10);


document.addEventListener("keydown",pulo);
