
//------PICKER,s NEEDED------//

const container = document.getElementById('container');
let numberChosen = document.getElementById('numberChosen');
let squareNumber = numberChosen.value;
let firstColor = "rgb(203, 198, 245)";
/*let body = document.querySelector('body');*/
let vody = document.getElementsByClassName('etch_sketch');
let inputcard = document.getElementById("inputCard");
let input = document.getElementById("numberChosen");
let clearBtn = document.getElementById('clearBtn');



//create and paint the Grid and the interface by default

vody.classList = "body-background-default";
inputcard.classList = "inputcard-default";
input.classList = "input-default";
clearBtn.classList = "clearBtn-default";
container.classList = "container-default";
createGrid(squareNumber);
darkenPaint(firstColor);


//------HANDLING INPUT BOX------//

//change color if value invalid
numberChosen.addEventListener('keyup', validation);

function validation(){
    
    squareNumber = numberChosen.value;

    if (squareNumber > 0 && squareNumber <= 100){
        numberChosen.style.color = "black";
        
    }else{
        numberChosen.style.color = "red";
    };
};


//run changeSide if && value is valid
numberChosen.addEventListener('keydown', changeSide);

function changeSide(e){

    squareNumber = numberChosen.value;
    if (e.key == "Enter" && squareNumber > 0 && squareNumber <= 100){
        
        createGrid(squareNumber); //create a new grid
        if (firstColor == "rgb(224, 198, 130)"){
            paint(firstColor);
        }else{
            darkenPaint(firstColor);
        };
        
    }; 
};
//-------------------------------//


//------CLEAR BUTTON------//

clearBtn.addEventListener('click', erase);
 
function erase(){
   let colArrayDiv = document.getElementsByClassName('column');
    
   for (let i=0; i<colArrayDiv.length; i++){
       colArrayDiv[i].style.backgroundColor = firstColor;
   };
};
//-------------------------------//



//------HANDLING SELECT DROPDOWN------//

let pref = document.getElementById("switchColor");

pref.addEventListener('click', switchClr);
function switchClr(e){
    switch (e.target.value){
        case "random":
            //set color interface
            vody.classList = "body-background-random";
            inputcard.classList = "inputcard-random";
            input.classList = "input-random";
            clearBtn.classList = "clearBtn-random";
            container.classList = "container-random";
            firstColor = "rgb(224, 198, 130)";
            
            //create and paint Grid
            createGrid(squareNumber);
            paint(firstColor);

            break;

        case "pink":
            //set color interface
            vody.classList = "body-background-pink";
            inputcard.classList = "inputcard-pink";
            input.classList = "input-pink";
            clearBtn.classList = "clearBtn-pink";
            container.classList = "container-pink";
            firstColor = "rgb(217, 165, 229)";

            //create and paint Grid
            createGrid(squareNumber);
            darkenPaint(firstColor);

            break;

        case "green":
            //set color interface
            vody.classList = "body-background-green";
            inputcard.classList = "inputcard-green";
            input.classList = "input-green";
            clearBtn.classList = "clearBtn-green";
            container.classList = "container-green";
            firstColor = "rgb(176, 243, 167)";

            //create and paint Grid
            createGrid(squareNumber);
            darkenPaint(firstColor);

            break;


        default:
            //set color interface
            vody.classList = "body-background-default";
            inputcard.classList = "inputcard-default";
            input.classList = "input-default";
            clearBtn.classList = "clearBtn-default";
            container.classList = "container-default";
            firstColor = "rgb(203, 198, 245)";
            
            //create and paint Grid
            createGrid(squareNumber);
            darkenPaint(firstColor);
    };
};
//-------------------------------//



//---------FUNCTIONS---------//


//--- CREATE THE GRID ---//


function createGrid(squareNumber){

    //clear Grid to let container get the new div,s

    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    };

    //create an array to store div,s for the first row

    let rowArrayDiv = [];

    for (let i = 0; i<squareNumber; i++){
        let rowDiv = document.createElement('div'); //create 1 div
        rowDiv.className = 'row'; //add classes to each div
        rowDiv.id = [i]; //add id to each div
        rowArrayDiv.push(rowDiv); //add each div to the array
    };

    //appends each item from row array inside the container

    for (let i = 0; i<rowArrayDiv.length; i++){
        container.appendChild(rowArrayDiv[i]);

        //create an array with same length as row-array for each row-div
        let colArrayDiv = [];
        for (let k=0; k<rowArrayDiv.length; k++){
            let colDiv = document.createElement('div');
            colDiv.className = 'column'; //add 'column' class to every square
            colArrayDiv.push(colDiv);//got array of arrays
        };
        
        //get items from row-array    
        let firstDiv = document.getElementById([i]);
        //append each col-array to each row-div
        for (let j=0; j<rowArrayDiv.length; j++){
            firstDiv.appendChild(colArrayDiv[j]);
        };
    };
};
//-------------------------------//

// for mouse painting the color passed into the function must be a string "rgb()"//

//------MOUSE RANDOM PAINTING------//

function paint(anyColor){
    let squareTarget = document.getElementsByClassName('column');//get array of div,s to iterate
        
    for (let i=0; i<squareTarget.length; i++){
        squareTarget[i].style.backgroundColor = anyColor;
        squareTarget[i].addEventListener('mouseover', changeColor);
    };

    function changeColor(e){
        
        e.target.style.backgroundColor = getRandomColor();
    
        
    };
    
};

function getRandomColor(){
            
    r = Math.round((Math.random()*255));
    g = Math.round((Math.random()*255));
    b = Math.round((Math.random()*255)); 
    
    let randomColor = "rgb("+r+", "+g+", "+b+")";
    return randomColor;
};

//-------------------------------//


//------MOUSE DARKEN PAINTING------//

function darkenPaint(somecolor){
    let squareTarget = document.getElementsByClassName('column');//get array of div,s to iterate
        
    for (let i=0; i<squareTarget.length; i++){
        squareTarget[i].style.backgroundColor = somecolor;
        squareTarget[i].addEventListener('mouseover', changeColor);
    };

    function changeColor(e){
       
        let color = e.target.style.backgroundColor; //get the actual color
        e.target.style.backgroundColor = darkenColor(color); //changes it
        color = e.target.style.backgroundColor;//update color
        
    };
};

function darkenColor(color){
    let colorSliced = color.slice(4, -1);
   
    let colorSlicedSplitted = colorSliced.split(",");
    
    let newArrayRgb = [];
    for (let i=0; i<colorSlicedSplitted.length; i++){
        let op = (colorSlicedSplitted[i]*1)-(Math.round(255/10));
        newArrayRgb.push(op);        
    }; 

    let darkerColor = "rgb("+newArrayRgb[0]+", "+newArrayRgb[1]+", "+newArrayRgb[2]+")";
    return darkerColor;
};

//-------------------------------//