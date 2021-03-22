// canvas config
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// adapt to screen change
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}, false);

// circle
class Circle {
    constructor(rad, dy) {
        this.rad = rad;
        this.x = Math.random() * innerWidth;
        // this.y = innerHeight + rad;
        this.y = Math.random() * innerHeight + innerHeight;
        this.dy = dy;
        this.colors = ['rgb(249, 240,157)', 'rgb(168, 231,167)', 'rgb(157,244,249)'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    update() {
        if(this.y + this.rad < 0) {
            this.y = Math.random() * innerHeight + innerHeight;
            this.x = Math.random() * innerWidth;
            this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        }
        else
            this.y += this.dy;
        this.draw();
    }
}

// background
class BubblesCanvas {
    constructor(n) {
        this.n = n;
        this.bubbles = [];
        this.init();
    }

    init() {
        for(let i = 0; i < this.n; i++) {
            this.bubbles.push(new Circle(4, -1.2));
        }
    }
}

// declare background
const bubble_bg = new BubblesCanvas(30);

// auto run animate function
(function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for(let i = 0; i < bubble_bg.bubbles.length; i++)
        bubble_bg.bubbles[i].update();
})();