// Content script
function checkElement() {
    const element = document.getElementById("your-element-id"); // Replace with your actual element ID

    if (element && element.childElementCount > 0) {
        const audio = new Audio("./2022.mp3"); // Replace with the path to your MP3 file
        audio.play();
    }
}

// Check the element initially
checkElement();

// Check the element every 2 seconds
setInterval(checkElement, 2000);
