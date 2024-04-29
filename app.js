let boxes = document.querySelectorAll(".box");
let resets = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msgs = document.querySelector(".msg");
let newGamebtns = document.querySelector("#new-btn");

let trunO = true;  //playerX or playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
   box.addEventListener("click",() => {
    console.log("box was clicked");
    if (trunO){
        box.innerText = "O";
        trunO = false;
    } else {
        box.innerText = "X";
        trunO = true;
    }
    box.disabled = true;

    checkWinner();
   });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    };
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};

const showWinner = (winner) => {
    msgs.innerText =`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
     for(let pattern of winPatterns) {
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;

    if(pos0val != "" && pos1val != "" && pos2val != ""){
        if(pos0val === pos1val && pos1val === pos2val){
            console.log("WINNER", pos1val);
            showWinner(pos1val);
            };
        };
    };
};


newGamebtns.addEventListener("click", resetGame);
resets.addEventListener("click", resetGame);
