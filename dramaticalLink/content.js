// Peut-^^etre rajouter un compte à rebours visuel ?

// On doit rajouter des sons

const totalSounds = 1;
const sounds = [];

for (let i = 1; i <= totalSounds; i++) {
    sounds.push(chrome.runtime.getURL(`sounds/${i}.mp3`));
}

function playRandomSound() {
    const index = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[index]);
    // audio.volume = 0.5 // Peut-^^etre faire une page une pop up pour que l'utilisateur choisit le volume
    audio.play();
}

document.addEventListener("click", function(e) {
    let link = e.target.closest("a");
    if (link && link.href) {
        e.preventDefault();
        playRandomSound();

        setTimeout(() => {
            window.location.href = link.href;
        }, 20000);
    }
}, true);