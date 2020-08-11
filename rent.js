let fRent = document.getElementById('fr');
let sRent = document.getElementById('sr');
let tRent = document.getElementById('tr');
let foRent = document.getElementById('for');
let fiRent = document.getElementById('fir');

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