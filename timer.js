
let timeInSecs;
let ticker;

function countdownTimer(secs) {

timeInSecs = parseInt(secs);

ticker = setInterval("tick()", 1000); 
}

function tick( ) {

    let secs = timeInSecs;
    if (secs > 0) {
    timeInSecs--; 
    }
    else {
    clearInterval(ticker);    countdownTimer(5 * 60); 
}

let mins = Math.floor(secs/60);

secs %= 60;

let count = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

document.getElementById("js-time").innerHTML = count;

document.getElementById("js-time").style.fontWeight = "900"

document.getElementById("js-time").style.fontSize = "100px"



}
document.querySelector(".btn").addEventListener("click", () => {

   

     function toggleButton(){

        let buttonTimer = btn.document.classList.contains(".btn-timer")

        if(btn != buttonTimer){
            if(buttonTimer) btn.classList.remove(".btn-timer")
        }else{
           
             btn.classList.add(".btn-timer")
        }
        return btn;
     }

            document.querySelector(".btn-timer").style.backgroundColor = "#14f9e2"
            document.querySelector(".btn-timer").style.color = "navy"
            document.querySelector(".btn-timer").style. borderRadius = "10px"

        
        toggleButton()
     
    })

  
    
countdownTimer()

