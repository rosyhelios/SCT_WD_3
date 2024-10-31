let boxes =document.querySelectorAll(".box");

let turn="X";
let isGameOver=false;

boxes.forEach(e=>{
  e.innerHTML=""
  e.addEventListener("click",()=>{
    if(!isGameOver && e.innerHTML===""){
      e.innerHTML=turn;
      checkWin();
      checkDraw();
      changeTurn();
    }
  })
})

function changeTurn(){
  if(turn === "X"){
    turn="O";
    document.querySelector(".bg").style.left="85px";
  }else{
    turn="X";
    document.querySelector(".bg").style.left="0";
  }
}

function checkWin(){
  let winCondition=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  for(let i=0;i<winCondition.length;i++){
    
    let v0=boxes[winCondition[i][0]].innerHTML;
    let v1=boxes[winCondition[i][1]].innerHTML;
    let v2=boxes[winCondition[i][2]].innerHTML;


    if(v0 != "" && v0===v1 && v0===v2){
      isGameOver=true;
      document.querySelector("#result").innerHTML=turn + "wins";
      document.querySelector("#playagain").style.display="inline";

      for(let j=0;j<3;j++){
        boxes[winCondition[i][j]].style.backgroundColor="#8D9D96";
        boxes[winCondition[i][j]].style.color="#000";
      }
    }
  }
}
function checkDraw(){
  if(!isGameOver){
    let isDraw=true;
    boxes.forEach(e=>{
      if(e.innerHTML==="")isDraw=false;
    })

    if(isDraw){
      isGameOver=true;
      document.querySelector("#result").innerHTML= "Draw";
      document.querySelector("#playagain").style.display="inline";
    }
  }
}

document.querySelector("#playagain").addEventListener("click",()=>{
  isGameOver=false;
  turn="X";
  document.querySelector(".bg").style.left="0";
  document.querySelector("#result").innerHTML="";
  document.querySelector("#playagain").style.display="none"

  boxes.forEach(e=>{
    e.innerHTML="";
    e.style.removeProperty("background-color");
    e.style.color="#fff";
  })
})
