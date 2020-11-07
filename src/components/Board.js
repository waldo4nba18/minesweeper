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
    
    const updateFlag=(e,x,y)=>{
        e.preventDefault();
        // deep copy of the object
        let newGrid=JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged=true;
        console.log(newGrid[x][y]);
        setGrid(newGrid);
    }

    const revealcell=(x,y)=>{
        let newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="X"){
            alert("clicked on mine");
        }
        else{
            newGrid[x][y].revealed=true;
            setGrid(newGrid);
        }
        
    }
    
    return (
        <div className="parent">
            {grid.map((singlerow,i1)=>{
                return (
                    <div style={style} key={i1}>
                        {singlerow.map((singlecol,i2)=>{
                          return  <Cell details={singlecol} key={i2} updateFlag={updateFlag} revealcell={revealcell}/>
                        })}
                    </div>
                )
            })}
        </div>
    ) 
    
}
export default Board;