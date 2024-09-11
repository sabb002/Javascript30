const settings = document.getElementById('settings');
const color = document.getElementById('color');
const stroke = document.getElementById('stroke');


stroke.addEventListener('input', (e) => {
    stroke_size = e.target.value;
    settings.style.setProperty('--stroke', e.target.value + 'px');
})

color.addEventListener('input', (e) => {
    color_hex = e.target.value
    settings.style.setProperty('--color', e.target.value);
})


/** ---------------- Canvas  ----------------- */
const canvas = /** @type {HTMLCanvasElement} */(document.getElementById('canvas1'));
const _ctx = canvas.getContext('2d');
let mouse_pos, last_pos;
let mousedown = false;
let shiftdown = false;
let stroke_size = 20;
let color_hex = "#222";

let W, H;
function setDimensions() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    resetStyle();
}
setDimensions();
window.addEventListener('resize', setDimensions);
canvas.addEventListener('mousedown', (e) => {
    mousedown = true;
    mouse_pos = { x: e.clientX, y: e.clientY };
    last_pos = mouse_pos;
    resetStyle();
})

canvas.addEventListener('mouseup', () => mousedown = false)
canvas.addEventListener('mouseout', () => mousedown = false)

function resetStyle() {
    _ctx.fillStyle = color_hex;
    _ctx.strokeStyle = color_hex
    _ctx.lineWidth = stroke_size;
    _ctx.lineCap = "round"
}

canvas.addEventListener("mousemove", (e) => {
    if (mousedown) {
        mouse_pos = { x: e.clientX, y: e.clientY };
        render() 
    }
})


function render() {
    _ctx.beginPath();
    _ctx.moveTo(last_pos.x, last_pos.y);
    _ctx.lineTo(mouse_pos.x, mouse_pos.y);
    _ctx.stroke();
    last_pos = mouse_pos;
}
