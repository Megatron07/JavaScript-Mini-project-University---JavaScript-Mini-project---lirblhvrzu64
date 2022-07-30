
let numOfCells = 9;

let rowsAndColumns = Math.sqrt(numOfCells);

let num;
let array;
let val;
let player = "X";
let ul = document.getElementById("ul");
let display = document.querySelector("h1");

function createPlatform(){
    num =0;
    ul.innerHTML = "";
    
    array = Array(numOfCells+1).fill("R");
    for(let i=1; i<=numOfCells; i++){
        let li = document.createElement("li");
        li.setAttribute("id", i);
        li.style.width = `${60/rowsAndColumns}vw`
        li.style.height = `${60/rowsAndColumns}vh`
        ul.appendChild(li);
        }
}

createPlatform();

ul.addEventListener("click", (e)=> func(e));

function func(event){
    display.innerText = "";
    val = Number(event.target.id);
    if(array[val] == "R"){
        array[val] = player;
        num++;
        event.target.innerText = player;
        if(num>= (rowsAndColumns*2)-1 && num<=numOfCells){
            // check row
            let ans = true;
            let columnNum = Math.ceil(val/rowsAndColumns);
            for(let i =(columnNum*rowsAndColumns)-rowsAndColumns+1; i<=(columnNum*rowsAndColumns); i++){
                if(array[i] != player){
                    ans = false;
                }
            }
            if (ans){
                display.innerText=`Player ${player} won`;
                createPlatform();
                return;
            };

            // check column    
            let rowNum = (val-1)%rowsAndColumns;
            ans = true;
            for(let i=rowNum+1; i<numOfCells; i+=rowsAndColumns){
                if(array[i]!= player){
                    ans = false;
                }
            }
            if (ans){
                display.innerText=`Player ${player} won`;
                createPlatform();
                return;
            }
            ans = true

            //check diagonal 1;
            for(let i=1; i<=numOfCells; i+=(rowsAndColumns+1)){
                if(array[i] != player){
                    ans = false;
                }
            }
            if (ans){
                display.innerText=`Player ${player} won`;
                createPlatform();
                return;
            }
            ans = true; 

            // check diagonal 2;
            for(let i=rowsAndColumns; i<numOfCells; i+=(rowsAndColumns-1)){
                if(array[i] != player){
                    ans = false;
                }
            }
            if (ans){
                display.innerText=`Player ${player} won`;
                createPlatform();
                return;
            }
            
        }   

        // Game tie because all cells are occupied;
        if(num==numOfCells){
            display.innerText=`Game Tie`;
            createPlatform();
            return;
        }

            // change player
        if (player=="X"){
            player = "O";
        }else{
            player = "X"
        }


        
    }   
}

