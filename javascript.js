
document.querySelector('car');
function car() {
    let car = document.getElementById('mycar')
    car.src = 'images/lights-on.png'
}
setInterval(car, 8000);

function night() {
    let dark = document.getElementById('cont')
    dark.style.background = 'linear-gradient(-360deg, darkblue, black)'
}
setInterval(night, 8000)

function rain() {
    let baarish = document.getElementById('rain')
    baarish.style.display = 'block';
}
setInterval(rain, 10000)

function sun() {
    let moon = document.getElementById('suraj')
    moon.style.backgroundColor = '#c5b8b8';
}
setInterval(sun, 8000)

function cloud(){
    let baadal=document.getElementById('clouds')
    baadal.style.opacity='0.6'
}
setInterval(cloud,8000)


