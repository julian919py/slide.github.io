import {signInWithEmailAndPassword, setPersistence, inMemoryPersistence} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import {auth} from './firebase.js'
setPersistence(auth, inMemoryPersistence)
const login = document.querySelector('#loginForm')
login.addEventListener('submit', async e =>{
    e.preventDefault()

    const email = login['loginUser'].value;
    const pass = login['inputPass'].value;

    try{
        const credentials = await signInWithEmailAndPassword(auth, email, pass)
        window.location.href = 'slide.html'
    } catch(error){
        console.log(error)
    }
})