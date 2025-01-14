let grid = document.getElementById('grid')
let gridSize = 25 * 20


for (let i= 0; i < gridSize; i++){
    let square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () =>{
        square.style.backgroundColor = getNeonColor()
    })
    

    square.addEventListener('mouseleave', () => {
        setTimeout(() => {
            square.style.backgroundColor = '#333'
            
        }, 500)
        
        
    })

    grid.appendChild(square)
}

function getNeonColor(){
    let hue = Math.floor(Math.random() * 360)
    return `hsl(${hue}, 100%, 60%)`
}
