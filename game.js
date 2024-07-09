let boxes=document.querySelectorAll(".box");
let ResetButton=document.querySelector("#Reset_button");
let NewGameButton=document.querySelector("#NewButton");
let MessageContainer=document.querySelector(".Message-container");
let Message=document.querySelector("#Message");
let turnO=true;
let Count=0;


const WinningPattern=[[0,1,2],
                      [0,3,6],
                      [0,4,8],
                      [1,4,7],
                      [2,5,8],
                      [2,4,6],
                      [3,4,5],
                      [6,7,8],
                     ];
                     
                     
                     

 
 const ResetGame = () =>
{
    turnO=true;
    Count=0;
    enableBoxes();
    MessageContainer.classList.add("hide");
    boxes.forEach((box) =>
{
    box.innerText="";
})
};


boxes.forEach((box)=>
{
    box.addEventListener("click", () =>
    {
                
                if(turnO==true)
            {
                box.innerText="O";
                turnO=false;
            }  
          else
        {
            box.innerText="X";
            turnO=true; 
        } 
    box.disabled=true;
    Count++;
let Winner=checkWinner();

if (Count === 9 && !Winner) {
    GameOver();
}

});    
});

const GameOver = () => {
    Message.innerText = `Game Over.`;
    MessageContainer.classList.remove("hide");
    disableBoxes();
  };


const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes = () =>
{
    for (let box of boxes)
    {
        box.disabled=false;
    }
};




const ShowWinner = (Winner) =>
{
    Message.innerText=`Congratulations! Winner is ${Winner}`;
    MessageContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for(let pattern of WinningPattern)
    {
     let val1=boxes[pattern[0]].innerText;
     let val2=boxes[pattern[1]].innerText;
     let val3=boxes[pattern[2]].innerText;

     if(val1 != "" && val2 != "" && val3 != "")
     {
         if(val1 === val2 && val2 === val3)
         {
             console.log("Winner",val1);
             ShowWinner(val1);
             disableBoxes();
         }
     }

    }
};


NewGameButton.addEventListener("click",ResetGame);
ResetButton.addEventListener("click",ResetGame);
