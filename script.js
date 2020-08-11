window.addEventListener("DOMContentLoaded", () => {
    const areas = document.querySelectorAll("map > area");
    for(let i = 0; i < areas.length; i++) {
        const area = areas[i];
        const coords = area.coords;
        const new_coords = coords.split(",").map((coord) => "" +Math.floor(parseFloat(coord) * 0.42)).join(",");
        area.coords = new_coords;
    }

    $('map').imageMapResize();
});

console.log("hello");