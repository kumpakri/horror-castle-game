function showOverlayImage(id, show) {
    const img = document.querySelector("#" + id);
    console.log(img);
    img.style.visibility = show ? "visible" : "hidden";
}

window.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem('blueKey') == "true")
    {
        showOverlayImage("blue-key", true);
    } else {
        showOverlayImage("blue-key", false);
    }
    if(localStorage.getItem('greenKey') == "true")
    {
        showOverlayImage("green-key", true);
    } else {
        showOverlayImage("green-key", false);
    }
    if(localStorage.getItem('purpleKey') == "true")
    {
        showOverlayImage("purple-key", true);
    } else {
        showOverlayImage("purple-key", false);
    }
    if(localStorage.getItem('orangeKey') == "true")
    {
        showOverlayImage("orange-key", true);
    } else {
        showOverlayImage("orange-key", false);
    }
});

