class Sound{
    constructor(elementSuffix){
        this.elementSuffix = elementSuffix;
        this.timeoutId = 0;
        // this.randomized = document.getElementById(elementSuffix + "-random").checked;
        // this.breakTime = document.getElementById(elementSuffix + "-break-time").value * 1000;
        this.player = document.getElementById(elementSuffix + "-player");
        this.container = document.getElementById(elementSuffix + "-container");
    }
    get randomized(){
        return document.getElementById(this.elementSuffix + "-random").checked;
    }
    get breakTime(){
        if(this.randomized){
            return document.getElementById(this.elementSuffix + "-break-time").value * 1000 * Math.random();
        }else{
            return document.getElementById(this.elementSuffix + "-break-time").value * 1000;
        }
    }
    play(){
        this.player.play();
    }
    playSound(){
        console.log("Attempting to play sound.");
        this.container.classList.add("active");

        let THAT = this;
        this.timeoutId = setTimeout(function(that = THAT){
            console.log(that);
            that.player.play();
            // that.stopSound();
            that.playSound();
        }, THAT.breakTime)
    }
    stopSound(){
        document.getElementById(this.elementSuffix + "-container").classList.remove("active");
        clearTimeout(this.timeoutId);
    }
}
let pipe = new Sound("metal-pipe");
// pipe.playSound();

let badToTheBone = new Sound("bad-to-the-bone");


let customAudioElementId;
let customAudioRandomized = false;

let customFile;
let customPlayer = document.getElementById("customPlayer");

function updateCustomPlayer() {
    customFile = document.getElementById("customFile").files[0];
    customPlayer = document.getElementById("customPlayer");
    customPlayer.src = URL.createObjectURL(customFile);
}

function playCustomSound(){
    customAudioRandomized = document.getElementById("custom-random").checked;
    let breakTime = document.getElementById("custom-break-time").value * 1000;
    if(customAudioRandomized){
        breakTime *= Math.random();
    }
    document.getElementById("custom-container").classList.add("active");
    customAudioElementId = setTimeout(function(){
        customPlayer.play();
        stopCustomSound();
        playCustomSound();
    }, breakTime);
}

function stopCustomSound(){
    document.getElementById("custom-container").classList.remove("active");
    clearTimeout(customAudioElementId);
}