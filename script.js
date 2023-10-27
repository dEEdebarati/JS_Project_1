var timer=60;
let score = 0;
let rn = 0;
function makeBubble(){
    let clutter = "";
    for(let i =0;i<=132;i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div id="bubble">${rn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;

}
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
// increaseScore();
function getNewHit(){
     rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}
getNewHit();
makeBubble();
function letsPlay(){
    document.querySelector("#pbottom").addEventListener("click",function(chacha){
        // console.log(Number(chacha.target.textContent));
        let a = Number(chacha.target.textContent);
        if(rn === a){
            increaseScore();
            getNewHit();
            makeBubble();
        }
    })
}
letsPlay();

function makeTimer(){
    var timerint =  setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timer").textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbottom").innerHTML = `<h2>Time's up!!</h2><br><div id = "play"><a href = "index.html">Play again</a></div>`;
        // document.querySelector("#pbottom").innerHTML = `<h2>Play again</h2>`
    }
    
  },1000);  
} 
makeTimer();

// function reloadAgain(){
//     let btn = document.querySelector("#play").addEventListener("onclick",function(){
//         location.replace(document.referrer);
//     });
//     // #play.addEventListener()
// }
// reloadAgain();