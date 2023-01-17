// function for hiding or displaying the sidebar

let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    console.log("are you working")
}

// function for hiding or displaying theme color

let themeIcon = document.querySelector(".theme-icon");
let theme = document.querySelector(".theme");

themeIcon.onclick = function(){
    theme.classList.toggle("hide-theme");
}

// function for changing theme 

// const changeTheme = document.querySelector(".change-theme");

// function changeTheme(color){
//     changeTheme.forEach(style) => {
//         if(color === style.getAttribute("title")){
//             style.removeAttribute("disabled");
//         }
//         else{
//             style.setAttribute("disabled", "true");
//         }
//     }
// }

let count = 0;
let playPause = document.getElementById("playPauseBtn");
let audio = document.getElementById("audioElement");
let img = document.querySelector(".thumbnail");

let myaudio = new Audio();
myaudio.src = '4.mp3';

const playSong = () =>{
    myaudio.play()
}

playPause.onclick = function(){
    if(count == 0){
        count = 1;
        audio.play();
    }
    else{
        count = 0;
        audio.pause();
    }
}




// form validation

// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;

// function signIn(){
//     if(email == )
// }







function validate_password() {
 
    var pass = document.getElementById('pass').value;
    var confirm_pass = document.getElementById('confirm_pass').value;
    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
          = 'Use same password';
        
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            'Password Matched';
        
    }
}

function wrong_pass_alert() {
    if (document.getElementById('pass').value != "" &&
        document.getElementById('confirm_pass').value != "") {
        alert("Your response is submitted");
    } else {
        alert("Please fill all the fields");
    }
}





