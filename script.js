function format(seconds) {
    const days = (seconds / 86400) | 0;
    const hours = (seconds / 3600) % 24 | 0;
    const minutes = (seconds / 60) % 60 | 0;
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds % 60} seconds`;
}

function update() {
    const christmas = new Date("2024-12-25");
    document.getElementById("countdown").innerHTML = format(Math.floor((christmas - new Date()) / 1000));
}

setInterval(() => {
    update();
}, 1000);

update();