const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto') 
const images = document.querySelectorAll('.contentImg')
grande.style.left = `0%`
let pos = 0
console.log(parseFloat(grande.offsetWidth))
if(parseFloat(grande.offsetWidth) <= 601){
    punto[0].addEventListener('click', ()=>{
        console.log(parseFloat(grande.style.left))
        if(parseFloat(grande.style.left) >= -67){
            pos--;
            grande.style.left = `${pos*33.5}%`;
        
        }
        if(parseFloat(grande.style.left) == -33.5){
            images[0].classList.remove('izq')
            images[1].classList.remove('act')
            images[2].classList.remove('der')
            images[1].classList.add('izq')
            images[2].classList.add('act')
            images[3].classList.add('der')
        }
        if(parseFloat(grande.style.left) == -67){
            images[1].classList.remove('izq')
            images[2].classList.remove('act')
            images[3].classList.remove('der')
            images[2].classList.add('izq')
            images[3].classList.add('act')
            images[4].classList.add('der')
        }
        if(parseFloat(grande.style.left) == -100.5){
            images[2].classList.remove('izq')
            images[3].classList.remove('act')
            images[4].classList.remove('der')
            images[2].classList.add('der')
            images[3].classList.add('izq')
            images[4].classList.add('act')
            grande.style.left = `${pos*28.5}%`;
        }
        console.log(parseFloat(grande.style.left) + " antes")
        if(parseFloat(grande.style.left) == 0){
            images[0].classList.remove('act')
            images[1].classList.remove('der')
            images[2].classList.remove('izq')
            images[0].classList.add('izq')
            images[1].classList.add('act')
            images[2].classList.add('der')
        }
    })
    punto[1].addEventListener('click', ()=>{
        console.log(parseFloat(grande.style.left))
        if(parseFloat(grande.style.left) < 19){
            pos++;
            grande.style.left = `${pos*33.5}%`;
            console.log(parseFloat(grande.style.left))
        }
        if(parseFloat(grande.style.left) == 33.5){
            images[0].classList.remove('izq')
            images[1].classList.remove('act')
            images[2].classList.remove('der')
            images[0].classList.add('act')
            images[1].classList.add('der')
            images[2].classList.add('izq')
            grande.style.left = `${pos*19}%`;
        }
        if(parseFloat(grande.style.left) == 0){
            images[1].classList.remove('izq')
            images[2].classList.remove('act')
            images[3].classList.remove('der')
            images[0].classList.add('izq')
            images[1].classList.add('act')
            images[2].classList.add('der')
        }
        if(parseFloat(grande.style.left) == -33.5){
            images[2].classList.remove('izq')
            images[3].classList.remove('act')
            images[4].classList.remove('der')
            images[1].classList.add('izq')
            images[2].classList.add('act')
            images[3].classList.add('der')
        }
        if(parseFloat(grande.style.left) == -67){
            images[2].classList.remove('der')
            images[3].classList.remove('izq')
            images[4].classList.remove('act')
            images[2].classList.add('izq')
            images[3].classList.add('act')
            images[4].classList.add('der')
        }
    })
}else{
    punto[0].addEventListener('click', ()=>{
        console.log('izq')
        if(parseFloat(grande.style.left) > -100.5){
            pos--;
            grande.style.left = `${pos*33.5}%`;
        }
        if(parseFloat(grande.style.left) == 0){
            images[0].classList.remove('act')
            images[1].classList.remove('der')
            images[0].classList.add('izq')
            images[1].classList.add('act')
            images[2].classList.add('der')
        }
        if(parseFloat(grande.style.left) == -33.5){
            images[0].classList.remove('izq')
            images[1].classList.remove('act')
            images[2].classList.remove('der')
            images[1].classList.add('izq')
            images[2].classList.add('act')
            images[3].classList.add('der')
        }
        if(parseFloat(grande.style.left) == -67){
            images[1].classList.remove('izq')
            images[2].classList.remove('act')
            images[3].classList.remove('der')
            images[2].classList.add('izq')
            images[3].classList.add('act')
            images[4].classList.add('der')
        }
        if(parseFloat(grande.style.left) == -100.5){
            images[2].classList.remove('izq')
            images[3].classList.remove('act')
            images[4].classList.remove('der')
            images[3].classList.add('izq')
            images[4].classList.add('act')
        }
    })
    punto[1].addEventListener('click', ()=>{
        if(parseFloat(grande.style.left) < 33.5){
            pos++;
            grande.style.left = `${pos*33.5}%`;
        }
        if(parseFloat(grande.style.left) == 0){
            images[0].classList.remove('act')
            images[1].classList.remove('izq')
            images[2].classList.remove('act')
            images[0].classList.add('izq')
            images[1].classList.add('act')
            images[2].classList.add('der')
        }
        if(parseFloat(grande.style.left) == 33.5){
            images[0].classList.remove('izq')
            images[1].classList.remove('act')
            images[2].classList.remove('der')
            images[0].classList.add('act')
            images[1].classList.add('der')
        }
        if(parseFloat(grande.style.left) == -33.5){
            images[1].classList.remove('act')
            images[2].classList.remove('izq')
            images[3].classList.remove('act')
            images[1].classList.add('izq')
            images[2].classList.add('act')
            images[3].classList.add('der')
        }
        if(parseFloat(grande.style.left) == -67){
            images[2].classList.remove('act')
            images[3].classList.remove('izq')
            images[4].classList.remove('act')
            images[2].classList.add('izq')
            images[3].classList.add('act')
            images[4].classList.add('der')
        }
    })
}
