// let playbackTime = 10000
let myAudioElement = document.getElementById('bad-to-the-bone');
let myAudioElementId;
let customAudioElementId;

let customFile;
let customPlayer = document.getElementById("customPlayer");

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

function updateCustomPlayer() {
    customFile = document.getElementById("customFile").files[0];
    customPlayer = document.getElementById("customPlayer");
    customPlayer.src = URL.createObjectURL(customFile);
}

function playCustomSound(){
    let breakTime = document.getElementById("custom-break-time").value * 1000;
    breakTime *= Math.random();
    document.getElementById("custom-container").classList.add("active");
    customAudioElementId = setTimeout(function(){
        customPlayer.play();
        playCustomSound();
    }, breakTime);

    // myAudioElement.play();
    // myAudioElement.pause();
    // myAudioElement.volume = 0.5;
}

function stopCustomSound(){
    document.getElementById("custom-container").classList.remove("active");
    clearTimeout(customAudioElementId);
}