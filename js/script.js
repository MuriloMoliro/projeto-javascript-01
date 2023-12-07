const button = document.getElementById("btn") 
const body = document.getElementById("tela")
const btn = document.getElementById("btn")
const color = ['red', '#ffffff', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'violet']

body.style.backgroundColor = 'orange'
btn.style.color = 'orange'


button.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
    btn.style.color = color[colorIndex]
}