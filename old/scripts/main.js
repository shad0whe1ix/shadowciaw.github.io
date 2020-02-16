// tutorial: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#A_Hello_world!_example
let myHeading = document.querySelector('h1');
myHeading.textContent = 'hello world!';
document.querySelector('html').onclick = function () {
    alert('ouch!!! stop poking me!');
}

let myImage = document.querySelector('img');
// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute ('src','images/firefox2.png');
//     } else {
//       myImage.setAttribute ('src','images/firefox-icon.png');
//     }
// }

let myButton = document.querySelector('button');
myButton.onclick = function(){
    setUserName();
}
if (!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'hewwo ' + storedName;
}

function setUserName() {
    let myName = prompt('please enter your name');
    if (!myNmae || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'hewwo ' + myName;
    }
}