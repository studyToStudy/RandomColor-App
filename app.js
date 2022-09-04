const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    color.textContent = getRandomColor()
    document.body.style.backgroundColor = getRandomColor()
})

const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
