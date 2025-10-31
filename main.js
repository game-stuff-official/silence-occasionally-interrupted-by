class Sound{
    constructor(elementSuffix, isCustom, fileLocation){
        // this.fileLocation = this.fileLocation;
        this.elementSuffix = elementSuffix;
        this.timeoutId = 0;
        // this.randomized = document.getElementById(elementSuffix + "-random").checked;
        this.breakTimeElement = document.getElementById(elementSuffix + "-break-time");
        this.player = document.getElementById(elementSuffix + "-player");
        this.container = document.getElementById(elementSuffix + "-container");
        this.isCustom = isCustom;
        let guh;
        if(isCustom){
            this.fileUpload = document.getElementById(elementSuffix + "-file-upload");
            this.fileUpload.addEventListener("change", () => this.updateCustomSound()); 
            guh = `<p>
                        <input type="file" id="${elementSuffix}-file-upload" accept="audio/*">
                    </p>`
        }
        this.elementTemplate = `
<section id="${this.elementSuffix}-container" class="sound">
    <h2>${this.elementSuffix}</h2>
    <audio id="${this.elementSuffix}-player">
        <source src="${this.fileLocation}.mp3">
    </audio>
    ${guh}
    <p>
        <button id="${this.elementSuffix}-play">Play Sound</button>
        <button id="${this.elementSuffix}-stop">Stop Sound</button>
    </p>
    <p>
    Maximum time between breaks (seconds):
        <input type="number" id="${this.elementSuffix}-break-time" min="0" max="3600">
    </p>
    <p>
        Random Playback
        <input type="checkbox" id="${this.elementSuffix}-random">
    </p>
</section>`

        document.getElementById(this.elementSuffix + "-play").addEventListener("click", () => this.playSound());
        document.getElementById(this.elementSuffix + "-stop").addEventListener("click", () => this.stopSound());
    }
    get randomized(){
        return document.getElementById(this.elementSuffix + "-random").checked;
    }
    get breakTime(){
        if(this.randomized){
            return Math.max(this.breakTimeElement.value * 1000 * Math.random(), this.player.duration * 1000);
        }else{
            return Math.max(this.breakTimeElement.value * 1000, this.player.duration * 1000);
        }
    }
    playSound(){
        console.log("Attempting to play sound.");
        this.container.classList.add("active");
        
        this.player.currentTime = 0;
        this.player.play();

        this.timeoutId = setTimeout(() => {
            console.log(this);

            this.playSound()
        }, this.breakTime)
    }
    stopSound(){
        document.getElementById(this.elementSuffix + "-container").classList.remove("active");
        clearTimeout(this.timeoutId);
        this.player.pause();
    }
    updateCustomSound(){
        if(this.isCustom){
            let file = this.fileUpload.files[Math.floor(Math.random(this.fileUpload.files.length))];
            this.player.src = URL.createObjectURL(file);
        }
    }
}
let custom1 = new Sound("custom1", true);

let pipe = new Sound("metal-pipe", false);
// pipe.playSound();

let badToTheBone = new Sound("bad-to-the-bone", false);
// badToTheBone.bindButtons();