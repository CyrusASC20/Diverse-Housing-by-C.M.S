// ADD CODE HERE
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
function onClick(){
    imgMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Silver Spring, MD";
    paragraph.style.backgroundColor = "black";
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    imgMain.appendChild(paragraph);
}
imgButton.addEventListener('click', onClick);
function onClick1(){
    pMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Jersey City, NJ";
    paragraph.style.backgroundColor = "black";
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    pMain.appendChild(paragraph);
}
pButton.addEventListener('click', onClick1);
function onClick2(){
    aMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "South Valley, NM";
    paragraph.style.backgroundColor = "black";
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    aMain.appendChild(paragraph);
}
aButton.addEventListener('click', onClick2);
function onClick3(){
    bMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Union City, NJ";
    paragraph.style.backgroundColor = "black";
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    bMain.appendChild(paragraph);
}
bButton.addEventListener('click', onClick3);
function onClick4(){
    cMain.style.display = 'block';
    let paragraph = document.createElement('p');
    paragraph.innerText = "Richmond, VA";
    paragraph.style.backgroundColor = "black";
    paragraph.style.color = "white"
    paragraph.style.padding = "10px"
    cMain.appendChild(paragraph);
}
cButton.addEventListener('click', onClick4);
function onClick5(){
    imgMain.innerHTML = "";
    pMain.innerHTML = "";
    aMain.innerHTML = "";
    bMain.innerHTML = "";
    cMain.innerHTML = "";
}
refreshButton.addEventListener('click', onClick5);
