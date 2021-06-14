var moves = 0;
var timetaken = 0;
var moveelem = document.getElementById("moves");
var timetakenelem = document.getElementById("timetake");
var youwon = document.getElementById("wongame");
var myVar = clearInterval();
var exercise = document.getElementById("exercise");


var boxes3;

function myTimer() {
    timetaken = timetaken + 1;
    timetakenelem.innerHTML = timetaken; 
};

const someArray = ['red', 'blue', 'green', 'yellow', 'pink','red', 'blue', 'green', 'yellow'];
const generateArrayAndRandomize = () => {
    someArray.sort(() => Math.random() - 0.5);
return someArray;
};

const renderResultsToDom = (results) => {
    //alert(results[0]);
    //el.innerHTML = results.join(' ');
    const grid1 = document.getElementsByClassName('box3');
Array.from(grid1).forEach(
    (box, index) => {
        box.id = index;
box.style.backgroundColor = someArray[index];
//alert(results[index]);
}
)
boxes3 = Array.from(grid1);
};

const buttonEl = document.querySelector('#trigger');


buttonEl.addEventListener('click', () => { 
    renderResultsToDom(generateArrayAndRandomize());
    timetaken = 0;
    moves = 0;
    moveelem.innerHTML = moves;
    clearInterval(myVar);
    myVar = setInterval(myTimer, 1000);
    exercise.style.display = "inline";
    youwon.style.display = "none";
   

    }
);







//5 X 5 Grid Start

const grid = document.getElementsByClassName('box');


Array.from(grid).forEach(
    (box, index) => {
        box.addEventListener("click", () => clickHandler(box))
        box.id = index;
}
)

let boxes = Array.from(grid);

const clickHandler= function(box){
    // get the box id, which will coincide with its position in the array
    
    index = parseInt(box.id);
    // determine the adjacent boxes' indexes
    up = index - 5;
    down = index + 5;
    left = index - 1;
    right = index + 1;
  


    // Make sure the index is not out of bounds and change color
    if(up >= 0){
        if(changeColor(boxes[up])){
            boxes[up].style.backgroundColor = getcolor(boxes[index]);
            boxes[index].style.backgroundColor = 'grey';
            boxes[index].style.border = 'none';
            boxes[up].style.border = '4px solid';
            moves = moves + 1;
        }
    }
    if(down < 25){
        if(changeColor(boxes[down])){
            boxes[down].style.backgroundColor = getcolor(boxes[index]);
            boxes[index].style.backgroundColor = 'grey';
            boxes[index].style.border = 'none';
            boxes[down].style.border = '4px solid';
            moves = moves + 1;
        }
    }
    if(left >= 0){
        if(changeColor(boxes[left])){
            boxes[left].style.backgroundColor = getcolor(boxes[index]);
            boxes[index].style.backgroundColor = 'grey';
            boxes[index].style.border = 'none';
            boxes[left].style.border = '4px solid';
            moves = moves + 1;
        }
    }
    if(right > 0 && right < 25){
        if(changeColor(boxes[right])){
            boxes[right].style.backgroundColor = getcolor(boxes[index]);
            boxes[index].style.backgroundColor = 'grey';
            boxes[index].style.border = 'none';
            boxes[right].style.border = '4px solid';
            moves = moves + 1;
        }
    } 
    moveelem.innerHTML = moves;
    //alert(getcolor(boxes3[0]));
    if(getcolor(boxes3[0]) === getcolor(boxes[6]) && getcolor(boxes3[1]) === getcolor(boxes[7]) && getcolor(boxes3[2]) === getcolor(boxes[8]) && getcolor(boxes3[3]) === getcolor(boxes[11]) && getcolor(boxes3[4]) === getcolor(boxes[12]) && getcolor(boxes3[5]) === getcolor(boxes[13]) && getcolor(boxes3[6]) === getcolor(boxes[16]) && getcolor(boxes3[7]) === getcolor(boxes[17]) && getcolor(boxes3[8]) === getcolor(boxes[18])){
        youwon.style.display = "inline";
        clearInterval(myVar);
        exercise.style.display = "none";
        playMusic();
    }
};

const changeColor = function(box){
    if (box.style.backgroundColor === '' || box.style.backgroundColor === 'grey') {
        return true;
    } else {
        return false;
    }
};
function getcolor(box){
    return box.style.backgroundColor;
}

function playMusic(){
  var music = new Audio('Triumph-sound-effect.mp3');
  music.play();
  }
