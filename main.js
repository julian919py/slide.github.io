const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto') 
const img = document.querySelectorAll('.image')
grande.style.left = `0%`
console.log(grande.style.left)
/*
punto.forEach((cadaPunto, i) => {
    //console.log(i)
    punto[i].addEventListener('click', ()=>{
          console.log(i)
    })
})
*/
let pos = 0
punto[1].addEventListener('click', ()=>{
    console.log("der")
    console.log(parseFloat(grande.style.left))
    if(parseFloat(grande.offsetWidth) <= 601){
        if(parseFloat(grande.style.left) < 0){
            pos--;
            grande.style.left = `${-pos*33.5}%`;
        }
        console.log(parseFloat(grande.style.left) + " antes de")
        if(parseFloat(grande.style.left) == 0){
            console.log("entro aqui")
            img[1].classList.remove('der')
            img[2].classList.remove('act')
            img[3].classList.remove('izq')
            img[0].classList.add('der')
            img[1].classList.add('act')
            img[2].classList.add('izq')
        }
        if(parseFloat(grande.style.left) == -67){
            pos--;
            grande.style.left = `${-pos*33.5}%`;
            img[2].classList.remove('der')
            img[3].classList.remove('act')
            img[4].classList.remove('izq')
            img[1].classList.add('der')
            img[2].classList.add('act')
            img[3].classList.add('izq')
            
        }
    }
    else{
        if(parseFloat(grande.style.left) >= -33.5){
            pos++;
            grande.style.left = `${-pos*33.5}%`;
            console.log(pos + " der")
            console.log(grande.offsetWidth)
            console.log(parseFloat(grande.style.left))
        }
        if(parseFloat(grande.style.left) == -33.5){  
            img[0].classList.remove('der')
            img[1].classList.add('der')
            img[2].classList.remove('izq')
            img[3].classList.add('izq')
            console.log("izq debe cambiar")
        }
        if(parseFloat(grande.style.left) == -67){
            img[1].classList.remove('der')
            img[2].classList.add('der')
            img[3].classList.remove('izq')
            img[4].classList.add('izq')
        }
    }
})
punto[0].addEventListener('click', ()=>{
    console.log(parseFloat(grande.style.left) + " izq")
    if(parseFloat(grande.offsetWidth) <= 601){
        console.log(img[1].classList)
        if(parseFloat(grande.style.left) > -67){
            pos++;
            grande.style.left = `${-pos*33.5}%`;
            img[0].classList.remove('der')
            img[1].classList.remove('act')
            img[2].classList.remove('izq')
            img[1].classList.add('der')
            img[2].classList.add('act')
            img[3].classList.add('izq')
        }
        if(parseFloat(grande.style.left) == -67){
            pos++;
            grande.style.left = `${-pos*22.5}%`;
            img[1].classList.remove('der')
            img[2].classList.remove('act')
            img[3].classList.remove('izq')
            img[2].classList.add('der')
            img[3].classList.add('act')
            img[4].classList.add('izq')
        }
        console.log(img[1].classList)
        console.log(img[0].classList)
    }
    else{
        if(parseFloat(grande.style.left) <= -33.5){
            pos--;
            grande.style.left = `${-pos*33.5}%`
            console.log(pos + " izq")
            console.log(grande.offsetWidth)
            console.log(parseFloat(grande.style.left))
        }
        if(parseFloat(grande.style.left) == -33.5){
            img[1].classList.add('der')
            img[2].classList.remove('der')
            img[3].classList.add('izq')
            img[4].classList.remove('izq')
        }
        if(parseFloat(grande.style.left) == 0){
            img[0].classList.add('der')
            img[1].classList.remove('der')
            img[2].classList.add('izq')
            img[3].classList.remove('izq')
        }
    }
})
