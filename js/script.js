let submitBtn = document.querySelector("#send");
let backBtn = document.querySelector("#goback");
let divResult = document.querySelector("#div-result");
let mainDiv = document.querySelector("#mainDiv");
let adults = document.querySelector("#adults");
let children = document.querySelector("#children");
let hours = document.querySelector("#hours");
let resultList = document.querySelector("#resultList");

function bbqCalc() {
  let totalGuests = Number(adults.value) + Number(children.value * 0.5);

  if (hours.value < 6) {
    var qtyGarlic = totalGuests * 2;
    var qtyVeggies = totalGuests * 2;
    var qtyShroom = totalGuests * 60;
    var qtyCorn = totalGuests * 1;
    var qtyCheese = totalGuests * 60;
    var qtySoda = totalGuests * 1;
    var qtyAlchool = (adults.value * 1.2).toFixed(1);
  } else {
    qtyGarlic = totalGuests * 3;
    qtyVeggies = totalGuests * 3;
    qtyShroom = totalGuests * 90;
    qtyCorn = totalGuests * 2;
    qtyCheese = totalGuests * 90;
    qtySoda = totalGuests * 1.5;
    qtyAlchool = (adults.value * 2).toFixed(1);
  }

  let garlicLi = document.createElement("li");
  resultList.appendChild(garlicLi);
  let garlicLiLiTxt = document.createTextNode(
    "🥖 " + qtyGarlic + " PÃES DE ALHO"
  );
  garlicLi.appendChild(garlicLiLiTxt);

  let veggiesLi = document.createElement("li");
  resultList.appendChild(veggiesLi);
  let veggiesLiTxt = document.createTextNode(
    "🍅 " + qtyVeggies + " ESPETINHOS DE LEGUMES*"
  );
  veggiesLi.appendChild(veggiesLiTxt);

  let shroomLi = document.createElement("li");
  resultList.appendChild(shroomLi);
  let shroomLiTxt = document.createTextNode("🍄 " + qtyShroom + "g DE SHITAKE");
  shroomLi.appendChild(shroomLiTxt);

  let cornLi = document.createElement("li");
  resultList.appendChild(cornLi);
  let cornLiTxt = document.createTextNode(
    "🌽 " + qtyCorn + " ESPIGAS DE MILHO"
  );
  cornLi.appendChild(cornLiTxt);

  let cheeseLi = document.createElement("li");
  resultList.appendChild(cheeseLi);
  let cheeseLiTxt = document.createTextNode(
    "🧀 " + qtyCheese + "g DE QUEIJO COALHO"
  );
  cheeseLi.appendChild(cheeseLiTxt);

  let sodaLi = document.createElement("li");
  resultList.appendChild(sodaLi);
  let sodaLiTxt = document.createTextNode(
    "🥤 " + qtySoda + "L DE REFRIGERANTE"
  );
  sodaLi.appendChild(sodaLiTxt);

  let alchoolY = document.querySelector("#alchoolY");
  if (alchoolY.checked) {
    let alchoolLi = document.createElement("li");
    resultList.appendChild(alchoolLi);
    let alchoolLiTxt = document.createTextNode(
      "🍺 " + qtyAlchool + "L DE CERVEJA"
    );
    alchoolLi.appendChild(alchoolLiTxt);
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (adults.value && hours.value && children.value) {
    divResult.classList.remove("display-none");
    mainDiv.classList.add("display-none");
    bbqCalc();
  } else {
    let mainTitle = document.querySelector("#mainTitle");
    let warning = document.createElement("span");
    let warningTxt = document.createTextNode(
      "Por favor, preencha todos os campos!"
    );
    warning.appendChild(warningTxt);
    warning.classList.add("warning");
    mainTitle.insertAdjacentElement("beforeend", warning);
    setTimeout(() => warning.remove(), 1500);
  }
});

backBtn.addEventListener("click", () => {
  divResult.classList.add("display-none");
  mainDiv.classList.remove("display-none");

  while (resultList.firstChild) {
    resultList.firstChild.remove();
  }
});

document.querySelector("#suggestions-span").addEventListener("click", () => {
  document.querySelector(".suggestions").classList.toggle("display-none");
});

// mobile only
let mobileBtn = document.querySelector('#mobileBtn');

window.addEventListener("load", () =>{
  if (window.matchMedia("(max-width: 1000px)").matches) {
   mobileBtn.classList.toggle('display-none');
  }
})

mobileBtn.addEventListener("click", () => {
  document.querySelector('.hero-container').style.display = 'none';
});


