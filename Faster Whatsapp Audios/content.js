const taskbarTag = "._3auIg"
var buttonState = 0;
const interval = setInterval(() => {
    const header = document.querySelector(taskbarTag);

    if (header) {
        clearInterval(interval)
        
        const button = createButton()

        button.addEventListener("click", () => {
            if (buttonState == 0) {
                buttonState = 1
                turnOnDoubleSpeed(button)
            } else {
                buttonState = 0
                turnOffDoubleSpeed(button)
            }
        })
        header.appendChild(button)
    }
}, 2000)


function createButton() {
    const button = document.createElement("button");
    button.innerHTML = "2x"
    button.classList.add("doubleSpeedButton")
    return button
}

function turnOnDoubleSpeed(button) {
    applyStyleTurnedOn(button)
    setDoubleSpeedLoop()
}


function applyStyleTurnedOn(button) {
    button.style.backgroundColor = "lightgray";
    button.style.color = "#222222";
    button.style.border = "1px solid #999";
    button.style.borderRadius = "30%";
}

function setDoubleSpeedLoop() {
    const doubleSpeedLoop = setInterval(function(){
        let audios = document.querySelectorAll("audio");
        audios.forEach((audio) => {
        if (buttonState == 0) {
            clearInterval(doubleSpeedLoop)    
        }
        audio.playbackRate = 2
        })
    }, 1000)
}

function turnOffDoubleSpeed(button) {
    applyStyleTurnedOff(button)
    setNormalSpeedLoop()
}

function applyStyleTurnedOff(button) {
    button.style.backgroundColor = null;
    button.style.color = null;
    button.style.border = null;
    button.style.borderRadius = null;
}

function setNormalSpeedLoop(){
    const setNormalSpeedLoop = setInterval(function(){
        let audios = document.querySelectorAll("audio");
        audios.forEach((audio) => {
        if (buttonState == 1) {
            clearInterval(setNormalSpeedLoop)    
        }
        audio.playbackRate = 1
        })
    }, 1000)
}