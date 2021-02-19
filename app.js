let btnLive1 = document.querySelector('.btn-live1');
let btnCode1 = document.querySelector('.btn-code1');

let btnLive2 = document.querySelector('.btn-live2');
let btnCode2 = document.querySelector('.btn-code2');

let btnLive3 = document.querySelector('.btn-live3');
let btnCode3 = document.querySelector('.btn-code3');

let btnLive4 = document.querySelector('.btn-live4');
let btnCode4 = document.querySelector('.btn-code4');

let btnLive5 = document.querySelector('.btn-live5');
let btnCode5 = document.querySelector('.btn-code5');

btnLive1.addEventListener('click', () => {
    window.open("https://junior66.github.io/Techdegree-Project-3/", '_blank');
});

btnCode1.addEventListener('click', () => {
    window.open("https://github.com/junior66/Techdegree-Project-3", '_blank');
});

btnLive2.addEventListener('click', () => {
    window.open("https://junior66.github.io/Techdegree-Project-4/style_guide/", '_blank');
});

btnCode2.addEventListener('click', () => {
    window.open("https://github.com/junior66/Techdegree-Project-4", '_blank');
});

btnLive3.addEventListener('click', () => {
    window.open("https://junior66.github.io/Techdegree-Project-6/", '_blank');
});

btnCode3.addEventListener('click', () => {
    window.open("https://github.com/junior66/Techdegree-Project-6", '_blank');
});

btnLive4.addEventListener('click', () => {
    window.open("https://junior66.github.io/Techdegree-Project-8/", '_blank');
});

btnCode4.addEventListener('click', () => {
    window.open("https://github.com/junior66/Techdegree-Project-8", '_blank');
});

btnLive5.addEventListener('click', () => {
    window.open("https://junior66.github.io/Techdegree-Project-7-1/", '_blank');
});

btnCode5.addEventListener('click', () => {
    window.open("https://github.com/junior66/Techdegree-Project-7-1", '_blank');
});



const user = document.getElementById( "userField" );
const message = document.getElementById( "messageField" );
const send = document.getElementById( "send" );

send.addEventListener( 'click' , () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "" ) {
    alert( "Please fill out user and message fields before sending" );
    } else if (user.value === "" ) {
    alert( "Please fill out user field before sending" );
    } else if (message.value === "" ) {
    alert( "Please fill out message field before sending" );
    } else {
    alert( `Message successfully sent to: ${user.value}` )};
    })


    // 
    // 

    // 
    // 

    // 
    // 

    // 
    // 

    // 
    // 


