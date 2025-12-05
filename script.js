const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01<>[]{}";
const fontSize = 24;
const columns = Math.floor(canvas.width / fontSize);

const drops = Array.from({ length: columns }).fill(0);

function draw() {
    ctx.fillStyle = "rgba(13, 13, 13, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff0033"; //color
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random()* letters.length)];

        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }

        drops[i]++;
    });
}

setInterval(draw, 50);