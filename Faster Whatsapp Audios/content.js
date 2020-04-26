
const interval = setInterval(() => {
    const header = document.querySelector("._3auIg");

    if (header) {
        clearInterval(interval)
    
    const button = document.createElement("button");
    button.innerHTML = "2x"
    button.classList.add("doubleSpeedButton")

    var button_state = 0;
    button.addEventListener("click", () => {

        if (button_state == 0) {
            turn_on_doubled_playback_rate(button)
            button_state = 1
        } else {
            turn_off_doubled_playback_rate(button)
            button_state = 0
        }

    })

    header.appendChild(button)

    }

}, 1000)



function turn_on_doubled_playback_rate(button) {
    console.log("Turned on")
    button.style.backgroundColor = "lightgray";
    button.style.color = "#222222";
    button.style.border = "1px solid #999";
    button.style.borderRadius = "30%";
    const audios = document.querySelectorAll("audio");
    audios.forEach((audio) => {
        audio.playbackRate = 2
    })
}



function turn_off_doubled_playback_rate(button) {
    console.log("Turned off")
    button.style.backgroundColor = null;
    button.style.color = null;
    button.style.border = null;
    button.style.borderRadius = null;
    const audios = document.querySelectorAll("audio");
    audios.forEach((audio) => {
        audio.playbackRate = 1
    })
}