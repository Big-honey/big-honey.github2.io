

function goto(){
    PreventExitPop = false;
    location.href = afurl;
}


var sec = 16;
var min = 00;

function countDown() {
    sec--;
    if (sec == -01) {
        sec = 59;
        min = min - 1;
    } else {
        min = min;
    }
    if (sec <= 9) { sec = "0" + sec; }
    time = sec ;
    if (document.getElementById) { 
        document.getElementById('timer_inp').innerHTML = time; 
    }
    SD = window.setTimeout("countDown();", 1000);

    if (min == '00' && sec == '00') { sec = "00";
        window.clearTimeout(SD);
        goto();
    }
}

window.onload = countDown;