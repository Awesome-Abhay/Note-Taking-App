import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBAmww-NyJNEIUuFsXrBtLb6vRJ4efuVAg",
    authDomain: "authorization-91925.firebaseapp.com",
    projectId: "authorization-91925",
    storageBucket: "authorization-91925.firebasestorage.app",
    messagingSenderId: "221305382421",
    appId: "1:221305382421:web:b62d640d2079358de7101c",
    measurementId: "G-9XQJHMGE9Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementsByClassName("danger")[0].addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = "/"; // Redirect to login page
    }).catch((error) => {
        console.error("Logout error:", error);
    });
});


async function updateUserProfile(user){

    const userName= user.displayName;
    const userProfilePicture= await user.photoURL;            
    document.querySelector(".user img").src= userProfilePicture;
    document.querySelector(".user h3").textContent= userName;
}

onAuthStateChanged(auth, (user)=>{
    if(user){
        updateUserProfile(user);
        const uid= user.uid;
        return uid;
    }else{
        alert("Create account and login");
        window.location.href="register.html";
    }
})
