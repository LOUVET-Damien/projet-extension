// Peut-etre rajouter un compte à rebours visuel ?

// On doit rajouter des sons

const totalSounds = 1;
const sounds = [];

for (let i = 1; i <= totalSounds; i++) {
    sounds.push(chrome.runtime.getURL(`/ressources/sounds/${i}.mp3`));
}

function playRandomSound() {
    const index = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[index]);
    // audio.volume = 0.5 // Peut-etre faire une page une pop up pour que l'utilisateur choisit le volume
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

document.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    e.preventDefault(); // Empêche la navigation

    let url = e.target.href;

    // Crée la vidéo
    let video = document.createElement("video");
    video.src = "/ressources/video/justevideo.mp4";
    video.autoplay = true;
    video.muted = true;       // 🔇 pas de son
    video.playsInline = true; // utile sur mobile
    video.removeAttribute("controls"); // supprime les boutons

    // Style plein écran simulé
    video.style.position = "fixed";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.zIndex = "999999";

    document.body.appendChild(video);

    // Demande le mode plein écran natif
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
      video.msRequestFullscreen();
    }

    // Quand la vidéo se termine → ouvre le lien
    video.onended = () => {
      window.location.href = url;
    };
  }
});