var colors = generateColors(6);
var boxes = document.getElementsByClassName('box');
var pickedColor = pickColor();
var rgbTag = document.querySelector('h1 span');
var scoreLabel = document.getElementById('scoreLabel');
var h1 = document.querySelector('h1');
var resetbtn = document.querySelector('#reset');
declareSquares()

rgbTag.textContent = pickedColor;

resetbtn.addEventListener('click', function(){
    colors = generateColors(6);
    pickedColor = pickColor();
    rgbTag.textContent = pickedColor;
    h1.style.backgroundColor = '';
    scoreLabel.textContent = 'Pick the Color';
    declareSquares();
    resetbtn.textContent = 'New colors? '
})

function declareSquares(){
    for(var i = 0; i< boxes.length; i++){
        //set initial colors
        boxes[i].style.backgroundColor = colors[i];
    
        //add click listeners
        boxes[i].addEventListener('click', function(){
            //grab color of clicked button
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                changeColor(clickedColor)
                h1.style.backgroundColor = pickedColor;
                scoreLabel.textContent = 'You did it!'
                resetbtn.textContent = 'Reset'
            }else{ 
                this.style.backgroundColor = '#232323';
                scoreLabel.textContent = 'Try Again!'
            }
        })
    }
}
function changeColor(clickedColor){
    for(let j = 0; j< boxes.length; j++){
        boxes[j].style.backgroundColor = clickedColor
    }
    
}

function pickColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}

function generateColors(amount){
    var colors = [];

    for(let i = 0; i < amount; i++){
        let color = `rgb(${randomRGBNumb()}, ${randomRGBNumb()}, ${randomRGBNumb()})`
        colors.push(color);
    }
    return colors;
}

function randomRGBNumb(){
    return Math.floor(Math.random() * 256)
}