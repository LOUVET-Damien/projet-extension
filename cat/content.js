// let PixeledCatImages = [
//     "https://tinyurl.com/ywep7xux",
//     "https://tinyurl.com/256hw52e",
//     "https://tinyurl.com/5ysd8tfs",
//     "https://tinyurl.com/5yp9nvzt",
//     "https://tinyurl.com/mmca93br",
//     "https://tinyurl.com/yue9fmuf",
//     "https://tinyurl.com/ycy7fnp9"
// ];


// // document.querySelectorAll("img").forEach(img => {
// //     img.src = PixeledCatImages[index];
// // });

// const imgs = document.getElementsByTagName("img");

// for (image of imgs) {
//     const index = Math.floor(Math.random() * PixeledCatImages.length);
//     image.src = PixeledCatImages[index];
// }

let PixeledCatImages = [
    "https://tinyurl.com/ywep7xux",
    "https://tinyurl.com/256hw52e",
    "https://tinyurl.com/5ysd8tfs",
    "https://tinyurl.com/5yp9nvzt",
    "https://tinyurl.com/mmca93br",
    "https://tinyurl.com/yue9fmuf",
    "https://tinyurl.com/ycy7fnp9"
];

// Fonction pour remplacer une image par une aléatoire
function replaceImage(img) {
    const index = Math.floor(Math.random() * PixeledCatImages.length);
    img.src = PixeledCatImages[index];
}

// Remplacer toutes les images déjà présentes
document.querySelectorAll("img").forEach(img => replaceImage(img));

// Observer les nouvelles images ajoutées dynamiquement
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.tagName === "IMG") {
                replaceImage(node);
            } else if (node.querySelectorAll) {
                node.querySelectorAll("img").forEach(img => replaceImage(img));
            }
        });
    });
});

// Observer tout le document pour les enfants ajoutés
observer.observe(document.body, { childList: true, subtree: true });