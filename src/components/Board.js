import React,{useState,useEffect} from "react";
import CreateBoard from '../utils/CreateBoard';
import Cell from './Cell';
function Board() {
    const [grid,setGrid]=useState([]);

    const style={
        display : 'flex',
        flexDirection : 'row',
        
    }
    useEffect(()=>{
        const freshBoard = () => {
            const newBoard=CreateBoard(10,10,15);
            // console.log(newBoard.mineLocation);
            setGrid(newBoard.board);
        }
        freshBoard();
    },[]);
    const updateFlag=(e)=>{
        e.preventDefault();
        console.log("Right Click");
    }
    
    return (
        <div className="parent">
            {grid.map(singlerow=>{
                return (
                    <div style={style}>
                        {singlerow.map(singlecol=>{
                          return  <Cell details={singlecol} updateFlag={updateFlag}/>
                        })}
                    </div>
                )
            })}
        </div>
    ) 
    
}
export default Board;