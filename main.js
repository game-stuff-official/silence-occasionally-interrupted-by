// let playbackTime = 10000
let myAudioElement = document.getElementById('bad-to-the-bone');
let myAudioElementId;

function playSound(){
    let breakTime = document.getElementById("bad-to-the-bone-break-time").value * 1000;
    breakTime *= Math.random();
    document.getElementById("bad-to-the-bone-container").classList.add("active");
    myAudioElementId = setTimeout(function(){
        myAudioElement.play();
        playSound();
    }, breakTime);

    // myAudioElement.play();
    // myAudioElement.pause();
    // myAudioElement.volume = 0.5;
}

function stopSound(){
    document.getElementById("bad-to-the-bone-container").classList.remove("active");
    clearTimeout(myAudioElementId);
}