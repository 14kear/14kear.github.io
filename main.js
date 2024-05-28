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

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}