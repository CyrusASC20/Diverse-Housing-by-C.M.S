let state = 1;

let fDiverse = document.getElementById('fd');
let sDiverse = document.getElementById('sd');
let tDiverse = document.getElementById('td');
let foDiverse = document.getElementById('fod');
let fiDiverse = document.getElementById('fid');


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
