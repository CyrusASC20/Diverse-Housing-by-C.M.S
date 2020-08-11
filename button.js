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