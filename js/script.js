let submitBtn = document.querySelector('#send');
let backBtn = document.querySelector('#goback');
let divResult = document.querySelector('#div-result');
let mainDiv = document.querySelector('#mainDiv');
let adults = document.querySelector('#adults');
let children = document.querySelector('#children');
let hours = document.querySelector('#hours');
let alchoolY = document.querySelector('#alchoolY');
let alchoolN = document.querySelector('#alchoolN');
let resultList = document.querySelector('#resultList');


submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    divResult.classList.remove('display-none');
    mainDiv.classList.add('display-none');  

    qtyCalc();
});

backBtn.addEventListener("click", () =>{
    divResult.classList.add('display-none');
    mainDiv.classList.remove('display-none');  

    while (resultList.firstChild){
        resultList.firstChild.remove();
    }
})

function qtyCalc(){
    let totalGuests = Number(adults.value) + Number(children.value * 0.5);

    let qtyVeggies= (totalGuests * 2);
    let veggiesLi = document.createElement('li');
    resultList.appendChild(veggiesLi);
    let veggiesLiLiTxt = document.createTextNode('🍅 ' + qtyVeggies + ' espetinhos de legumes');
    veggiesLi.appendChild(veggiesLiLiTxt);

    let qtyShroom= (totalGuests * 60);
    let shroomLi = document.createElement('li');
    resultList.appendChild(shroomLi);
    let shroomLiTxt = document.createTextNode('🍄 ' + qtyShroom + ' gramas de shitake');
    shroomLi.appendChild(shroomLiTxt);

    let qtyCorn= (totalGuests * 1);
    let cornLi = document.createElement('li');
    resultList.appendChild(cornLi);
    let cornLiTxt = document.createTextNode('🌽 ' + qtyCorn + ' espigas de milho');
    cornLi.appendChild(cornLiTxt);

    let qtyCheese= (totalGuests * 60);
    let cheeseLi = document.createElement('li');
    resultList.appendChild(cheeseLi);
    let cheeseLiTxt = document.createTextNode('🧀 ' + qtyCheese + ' gramas de queijo coalho');
    cheeseLi.appendChild(cheeseLiTxt);

    let qtySoda = (totalGuests * 1.5).toFixed(1);
    let sodaLi = document.createElement('li');
    resultList.appendChild(sodaLi);
    let sodaLiTxt = document.createTextNode('🥤 ' + qtySoda + ' litros de refrigerante');
    sodaLi.appendChild(sodaLiTxt);

 if (alchoolY.checked){
   let qtyAlchool = (adults.value * 1.2);
   let alchoolLi = document.createElement('li');
   resultList.appendChild(alchoolLi);
   let alchoolLiTxt = document.createTextNode('🍺 ' + qtyAlchool + ' litros de cerveja');
   alchoolLi.appendChild(alchoolLiTxt);
 }
}


