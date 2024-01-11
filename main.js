let time = false;
let min = 0;
let hr = 0;
let sec = 0;

function start(){
    if(!time){
        time = setInterval(stopWatch, 1000);
    }
    
}

function stop(){
    clearInterval(time)
    time = false;
}
function reset(){
    clearInterval(time)
    time = false;
    min = 0;
    hr =  0;
    sec =  0;
    document.querySelector(".hr").innerHTML = "00";
    document.querySelector(".min").innerHTML = "00";
    document.querySelector(".sec").innerHTML = "00";

}

function stopWatch() {
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
    }
    if(min == 60){
        hr++;
        min = 0;
    }
    display();
}
function display(){
    document.querySelector(".hr").innerText = pad(hr) ;
    document.querySelector(".min").innerText = pad(min) ;
    document.querySelector(".sec").innerText = pad(sec) ;
}
function pad(value){
    return value < 10 ? `0${value}`: value;
}

