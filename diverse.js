let state = 1;
let state2 = 1;
let state3 = 1;
let state4 = 1;
let state5 = 1;

let fDiverse = document.getElementById('fd');
let sDiverse = document.getElementById('sd');
let tDiverse = document.getElementById('td');
let foDiverse = document.getElementById('fod');
let fiDiverse = document.getElementById('fid');


function onClick11(){
    fDiverse.innerHTML = "Diversity Score: 71.6 out of 100";
    state += 1
    if (state >= 3){
        fDiverse.innerHTML = "Houston, TX";
        //setTimeout(function(){ imgMain.innerHTML = "";}, 3000);
        state = 1
    }
}
fDiverse.addEventListener('click', onClick11);

function onClick12(){
    sDiverse.innerHTML = "Diversity Score: 71.52 out of 100";
    state += 1
    if (state >= 3){
        sDiverse.innerHTML = "Jersey City, NJ";
        //setTimeout(function(){ imgMain.innerHTML = "";}, 3000);
        state = 1
    }

}
sDiverse.addEventListener('click', onClick12);

function onClick13(){
    tDiverse.innerHTML = "Diversity Score: 71.47 out of 100";
    state2 += 1
    if (state2 >= 3){
        tDiverse.innerHTML = "New York, NY";
        //setTimeout(function(){ imgMain.innerHTML = "";}, 3000);
        state2 = 1
    }

}
tDiverse.addEventListener('click', onClick13);

function onClick14(){
    foDiverse.innerHTML = "Diversity Score: 71.23 out of 100";
    state3 += 1
    if (state3 >= 3){
        foDiverse.innerHTML = "Gaithersburg, MD";
        //setTimeout(function(){ imgMain.innerHTML = "";}, 3000);
        state3 = 1
    }

}
foDiverse.addEventListener('click', onClick14);

function onClick15(){
    fiDiverse.innerHTML = "Diversity Score: 71.12 out of 100";
    state4 += 1
    if (state4 >= 3){
        fiDiverse.innerHTML = "Dallas, TX";
        //setTimeout(function(){ imgMain.innerHTML = "";}, 3000);
        state4 = 1
    }

}
fiDiverse.addEventListener('click', onClick15);
