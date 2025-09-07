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
    "https://tinyurl.com/ycy7fnp9",
    "https://i.imgur.com/KK2N3D0.jpeg",
    "https://i.imgur.com/JRE0Fpa.jpeg",
    "https://i.imgur.com/zZ7a0aE.jpeg",
    "https://i.imgur.com/OIYkPoy.jpeg",
    "https://i.imgur.com/XDdKwd7.jpeg",
    "https://i.imgur.com/fhc0kzm.jpeg",
    "https://i.imgur.com/fiwU0tR.jpeg"
];

function replaceImage(img) {
    const index = Math.floor(Math.random() * PixeledCatImages.length);
    img.src = PixeledCatImages[index];
}

// Remplacer toutes les images déjà présentes
document.querySelectorAll("img").forEach(img => replaceImage(img));

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

observer.observe(document.body, { childList: true, subtree: true });