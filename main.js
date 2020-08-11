// ADD CODE HE


let state = 1;

let imgButton = document.getElementById('img_button');
let imgMain = document.getElementById('img_div');
let pButton = document.getElementById('p_button');
let pMain = document.getElementById('p_div');
let aButton = document.getElementById('a_button');
let aMain = document.getElementById('a_div');
let bButton = document.getElementById('b_button');
let bMain = document.getElementById('b_div');
let cButton = document.getElementById('c_button');
let cMain = document.getElementById('c_div');
let refreshButton = document.getElementById('refresh')

let dButton = document.getElementById('d_button');
let dMain = document.getElementById('d_div');
let eButton = document.getElementById('e_button');
let eMain = document.getElementById('e_div');
let fButton = document.getElementById('f_button');
let fMain = document.getElementById('f_div');
let gButton = document.getElementById('g_button');
let gMain = document.getElementById('g_div');
let hButton = document.getElementById('h_button');
let hMain = document.getElementById('h_div');

let fDiverse = document.getElementById('fd');
let sDiverse = document.getElementById('sd');
let tDiverse = document.getElementById('td');
let foDiverse = document.getElementById('fod');
let fiDiverse = document.getElementById('fid');

let fRent = document.getElementById('fr');
let sRent = document.getElementById('sr');
let tRent = document.getElementById('tr');
let foRent = document.getElementById('for');
let fiRent = document.getElementById('fir');

function onClick(){
    imgMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Silver Spring, MD";
    paragraph.style.backgroundColor = '#E65F5C';
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    paragraph.style.borderRadius = "10px"
    imgMain.appendChild(paragraph);
    setTimeout(function(){ imgMain.innerHTML = "";}, 5000);
    }
            
imgButton.addEventListener('click', onClick);


function onClick1(){
    pMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Jersey City, NJ";
    paragraph.style.backgroundColor = '#E65F5C';
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    paragraph.style.borderRadius = "10px"
    pMain.appendChild(paragraph);
    setTimeout(function(){ pMain.innerHTML = "";}, 5000);
}

pButton.addEventListener('click', onClick1);

function onClick2(){
    aMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "South Valley, NM";
    paragraph.style.backgroundColor = '#E65F5C';
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    paragraph.style.borderRadius = "10px"
    aMain.appendChild(paragraph);
    setTimeout(function(){ aMain.innerHTML = "";}, 5000);
}

aButton.addEventListener('click', onClick2);

function onClick3(){
    bMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Union City, NJ";
    paragraph.style.backgroundColor = '#E65F5C';
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    paragraph.style.borderRadius = "10px"
    bMain.appendChild(paragraph);
    setTimeout(function(){ bMain.innerHTML = "";}, 5000);
}

bButton.addEventListener('click', onClick3);

function onClick4(){
    cMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Richmond, VA";
    paragraph.style.backgroundColor = '#E65F5C';
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    paragraph.style.borderRadius = "10px"
    cMain.appendChild(paragraph);
    setTimeout(function(){ cMain.innerHTML = "";}, 5000);
}

cButton.addEventListener('click', onClick4);

function onClick5(){
    dMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Bismarck, ND";
    paragraph.style.backgroundColor = '#E65F5C';
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    paragraph.style.borderRadius = "10px"
    dMain.appendChild(paragraph);
    setTimeout(function(){ dMain.innerHTML = "";}, 5000);
}

dButton.addEventListener('click', onClick5);

function onClick6(){
    eMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Portland, ME";
    paragraph.style.backgroundColor = '#E65F5C';
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    paragraph.style.borderRadius = "10px"
    eMain.appendChild(paragraph);
    setTimeout(function(){ eMain.innerHTML = "";}, 5000);
}

eButton.addEventListener('click', onClick6);

function onClick7(){
    fMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Cedar Rapids, IA";
    paragraph.style.backgroundColor = '#E65F5C';
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    paragraph.style.borderRadius = "10px"
    fMain.appendChild(paragraph);
    setTimeout(function(){ fMain.innerHTML = "";}, 5000);
}

fButton.addEventListener('click', onClick7);

function onClick8(){
    gMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Brownsville, TX";
    paragraph.style.backgroundColor = '#E65F5C';
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    paragraph.style.borderRadius = "10px"
    gMain.appendChild(paragraph);
    setTimeout(function(){ gMain.innerHTML = "";}, 5000);
}

gButton.addEventListener('click', onClick8);

function onClick9(){
    hMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Port St. Lucie, FL";
    paragraph.style.backgroundColor = '#E65F5C';
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    paragraph.style.borderRadius = "10px"
    hMain.appendChild(paragraph);
    setTimeout(function(){ hMain.innerHTML = "";}, 5000);
}

hButton.addEventListener('click', onClick9)


/*function onClick10(){
    imgMain.innerHTML = "";
    pMain.innerHTML = "";
    aMain.innerHTML = "";
    bMain.innerHTML = "";
    cMain.innerHTML = "";
    dMain.innerHTML = "";
    eMain.innerHTML = "";
    fMain.innerHTML = "";
    gMain.innerHTML = "";
    hMain.innerHTML = "";
}

refreshButton.addEventListener('click', onClick10);*/

function onClick11(){
    fDiverse.innerHTML = "Diversity Score: 71.6 out of 100";
    setTimeout(function(){ fDiverse.innerHTML = "Houston, TX";}, 10000);
}
fDiverse.addEventListener('click', onClick11);

function onClick12(){
    sDiverse.innerHTML = "Diversity Score: 71.52 out of 100";
    setTimeout(function(){ sDiverse.innerHTML = "Jersey City, NJ";}, 10000);
}
sDiverse.addEventListener('click', onClick12);

function onClick13(){
    tDiverse.innerHTML = "Diversity Score: 71.47 out of 100";
    setTimeout(function(){ tDiverse.innerHTML = "New York, NY";}, 10000);
}
tDiverse.addEventListener('click', onClick13);

function onClick14(){
    foDiverse.innerHTML = "Diversity Score: 71.23 out of 100";
    setTimeout(function(){ foDiverse.innerHTML = "Gaithersburg, MD";}, 10000);
}
foDiverse.addEventListener('click', onClick14);

function onClick15(){
    fiDiverse.innerHTML = "Diversity Score: 71.12 out of 100";
    setTimeout(function(){ fiDiverse.innerHTML = "Dallas, TX";}, 10000);
}
fiDiverse.addEventListener('click', onClick15);

function onClick16(){
    fRent.innerHTML = "Best Place to Rent Score: 61.97 out of 100";
    setTimeout(function(){ fRent.innerHTML = "Bismarck, ND";}, 10000);
}
fRent.addEventListener('click', onClick16);

function onClick17(){
    sRent.innerHTML = "Best Place to Rent Score: 57.98 out of 100";
    setTimeout(function(){ sRent.innerHTML = "Lewiston, ME";}, 10000);
}
sRent.addEventListener('click', onClick17);

function onClick18(){
    tRent.innerHTML = "Best Place to Rent Score: 57.70 out of 100";
    setTimeout(function(){ tRent.innerHTML = "Lincoln, NE";}, 10000);
}
tRent.addEventListener('click', onClick18);

function onClick19(){
    foRent.innerHTML = "Best Place to Rent Score: 56.89 out of 100";
    setTimeout(function(){ foRent.innerHTML = "Rapid City, SD";}, 10000);
}
foRent.addEventListener('click', onClick19);

function onClick20(){
    fiRent.innerHTML = "Best Place to Rent Score: 56.81 out of 100";
    setTimeout(function(){ fiRent.innerHTML = "Sioux Falls, SD";}, 10000);
}
fiRent.addEventListener('click', onClick20);


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }