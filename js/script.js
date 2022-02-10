let submitBtn = document.querySelector('#send');
let backBtn = document.querySelector('#goback');
let divResult = document.querySelector('#div-result');
let mainDiv = document.querySelector('#mainDiv');

submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    divResult.classList.remove('display-none');
    mainDiv.classList.add('display-none');  

    qtyCalc();
});

backBtn.addEventListener("click", () =>{
    divResult.classList.add('display-none');
    mainDiv.classList.remove('display-none');  
})

function qtyCalc(){
    return;
}