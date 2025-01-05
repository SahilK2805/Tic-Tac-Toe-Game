let boxes = document.querySelectorAll(".box");
let resetBbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Box was clicked");
        if (turnO){
            box.innerText="O";
            turnO=false;

        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;

        checkWinner();
    });

});
let showWinner = (winner) =>{
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}


let disableBoxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
}

let enableBoxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}
let checkWinner = () => {
    for (patterns of winPatterns){
        console.log(patterns[0], patterns[1], patterns[2]);
        console.log(boxes[patterns[0]].innerText,
                    boxes[patterns[1]].innerText, 
                    boxes[patterns[2]].innerText
                );


        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;


        if (pos1val !=="" && pos2val!=="" && pos3val!==""){
            if (pos1val === pos2val && pos2val === pos3val) {

                console.log("Winner");


                showWinner(pos1val);
                disableBoxes();

                
            }
        }
    };
};


let resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
};

resetBbtn.addEventListener("click", resetGame);



let btn1 = document.querySelector(".btn1");
let currMode = "Light";

btn1.addEventListener("click", () => {
    if (currMode === "Light") {
        currMode = "Dark";
        document.querySelector("body").style.backgroundColor = "#1e2a2d"; // Dark mode background
        document.querySelector("body").style.color = "#d1d1d1"; // Light text
        
        document.querySelectorAll(".box").forEach(box => {
            box.style.backgroundColor = "#e9c46a"; // Light box color
            box.style.color = "#1e2a2d"; // Dark box text color


        document.querySelector("#reset-btn").style.backgroundColor = "red";

        });
    } else {
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "#548687"; // Light mode background
        document.querySelector("body").style.color = "#000"; // Dark text
        
        document.querySelectorAll(".box").forEach(box => {
            box.style.backgroundColor = "khaki"; // Light box color
            box.style.color = "#000"; // Dark box text color

            document.querySelector("#reset-btn").style.backgroundColor = "black";
        });
    }
    console.log(currMode);
});

