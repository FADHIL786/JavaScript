let colors = ['lightblue', 'lightgreen', 'lightcoral', 'orange', 'lightpink', 'gray', 'brown', 'purple', 'sandal'];
let currentIndex = 0;
function changeBackgroundColor() {
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentIndex];
}