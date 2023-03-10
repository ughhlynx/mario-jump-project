const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(()=> {
        mario.classList.remove('jump');
    }, 600);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''));
    console.log(marioPosition)
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px` 
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px` 
    }
}, 10)

document.addEventListener('keydown', jump);