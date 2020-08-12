let state = 1;

let fRent = document.getElementById('fr');
let sRent = document.getElementById('sr');
let tRent = document.getElementById('tr');
let foRent = document.getElementById('for');
let fiRent = document.getElementById('fir');

function onClick16(){
    fRent.innerHTML = "Best Place to Rent Score: 61.97 out of 100";
    state += 1
    if (state >= 3){
        fRent.innerHTML = "Bismarck, ND";
        //setTimeout(function(){ imgMain.innerHTML = "";}, 3000);
        state = 1
    }
}
fRent.addEventListener('click', onClick16);

function onClick17(){
    sRent.innerHTML = "Best Place to Rent Score: 57.98 out of 100";
    state += 1
    if (state >= 3){
        sRent.innerHTML = "Lewiston, ME";
        //setTimeout(function(){ imgMain.innerHTML = "";}, 3000);
        state = 1
    }
}
sRent.addEventListener('click', onClick17);

function onClick18(){
    tRent.innerHTML = "Best Place to Rent Score: 57.70 out of 100";
    state += 1
    if (state >= 3){
        tRent.innerHTML = "Lincoln, NE";
        //setTimeout(function(){ imgMain.innerHTML = "";}, 3000);
        state = 1
    }
}
tRent.addEventListener('click', onClick18);

function onClick19(){
    foRent.innerHTML = "Best Place to Rent Score: 56.89 out of 100";
    state += 1
    if (state >= 3){
        foRent.innerHTML = "Rapid City, SD";
        //setTimeout(function(){ imgMain.innerHTML = "";}, 3000);
        state = 1
    }
}
foRent.addEventListener('click', onClick19);

function onClick20(){
    fiRent.innerHTML = "Best Place to Rent Score: 56.81 out of 100";
    state += 1
    if (state >= 3){
        fiRent.innerHTML = "Sioux Falls, SD";
        //setTimeout(function(){ imgMain.innerHTML = "";}, 3000);
        state = 1
    }
}
fiRent.addEventListener('click', onClick20);