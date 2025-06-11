import React, { useState, useRef } from 'react'
import './TicTacToe.css'
import Boxes from "./Boxes"
import circle_icon from "../Assets/circle.png"
import cross_icon from "../Assets/cross.png"

let data = Array(9).fill("");  // used to create 9 empty strings

const TicTacToe = () => {
  let [count,setCount]=useState(0);
  let [lock,setLock]=useState(false);
  let titleRef=useRef(null);
  const toggle=(e,num)=>{
    if(lock){
        return 0;
    }
    if(count%2==0){
        e.target.innerHTML=`<img src='${cross_icon}'>`;
        data[num]="x";
        setCount(++count)
    }
    else{
        e.target.innerHTML=`<img src='${circle_icon}'>`;
        data[num]="o";
        setCount(++count)
    }
    checkWin()
  }

  const checkWin=()=>{
    const winningCombinations = [ // combinations for rows, columns and diagonals
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const won=(winner)=>{
        setLock(true)
        if(winner==="x"){
            titleRef.current.innerHTML=`Congratulations: <img src='${cross_icon}'> Wins`
        }
        else{
            titleRef.current.innerHTML=`Congratulations: <img src='${circle_icon}'> Wins`
        }
    }

    for (const [a, b, c] of winningCombinations) {
      if (data[a] === data[b] && data[b] === data[c] && data[a] !== "") { // our winning condition
        won(data[c]);
        break;
      }
    }
  }
  const reset=()=>{
    setLock(false);
    setCount(0);
    data=Array(9).fill("");
    titleRef.current.innerHTML=`Tic Tac Toe Game In <span>React</span>`;

    for(let i=0;i<9;i++){
        let box=document.getElementById(`box-${i}`);
        if (box) box.innerHTML="";
    }

  }
  return (
    <div className="container">
        <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
        <div className="board">
            <Boxes row="row1" base={0} click={toggle}/>
            <Boxes row="row2" base={3} click={toggle}/>
            <Boxes row="row3" base={6} click={toggle}/>
        </div>
        <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe