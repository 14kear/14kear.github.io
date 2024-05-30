let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.getElementById('but');

const enableWhiteStyle = () =>{
    document.body.classList.add('whitestyle');
    localStorage.setItem('styleMode', 'white');
}
const disableWhiteStyle = () =>{
    document.body.classList.remove('whitestyle');
    localStorage.setItem('styleMode', null);
}

styleToggle.addEventListener('click', () => {
    styleMode = localStorage.getItem('styleMode');
    if (styleMode !== 'white'){
        enableWhiteStyle();
    }
    else{
        disableWhiteStyle();
    }
});

if(styleMode==='white'){
    enableWhiteStyle();
}

let scrollAnim = document.getElementById('scrollJs');
let startBut = document.getElementById('startBut');
let firstBut = document.getElementById('firstBut');
let secondBut = document.getElementById('secondBut');
let thirdBut = document.getElementById('thirdBut');

// startBut.addEventListener('click', () => {
//     scrollAnim.style.transform = "translate(0px,0px)";
// })
// firstBut.addEventListener('click', () =>{
//     scrollAnim.style.transform = "translate(0px,60px)";
// })
// secondBut.addEventListener('click', () =>{
//     scrollAnim.style.transform = "translate(0px,120px)";
// })
// thirdBut.addEventListener('click', () =>{
//     scrollAnim.style.transform = "translate(0px,180px)";
// })
document.addEventListener('scroll', () =>{
    scrollAnim.style.transform = `translate(0px,${document.documentElement.scrollTop/17.5}px)`
})

const anchors = document.querySelectorAll('a[href*="#"');
for (let anchor of anchors){
    anchor.addEventListener('click',(e) => {
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    })
}