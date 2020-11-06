// Using the util function to create board
function CreateBoard(row,col,mines){
    let board=[];
    let mineslocation=[];


    if(mines>row*col){
        mines=(row*col)/3;
    }

    for(let x=0;x<row;x++){
        let subcol=[];
        for(let y=0;y<col;y++){
            subcol.push({
                value:0,
                isrevealed:false,
                x:x,
                y:y,
                isflagged:false
            });
        }
        board.push(subcol);
    }
    let minescount=0;
    // Placing the mines at the random places 
    while(minescount<mines){
        let x=Math.floor(Math.random()*row);
        let y=Math.floor(Math.random()*col);
        if(board[x][y].value === 0){
            board[x][y].value="X";
            mineslocation.push([x,y]);
            minescount++;
        }
    }
    for(let x=0;x<row;row++){
        for(let y=0;y<col;col++){
                if(board[x][y].value === "X"){
                    continue;
                }

                // top
                
                if(x>0 && board[x-1][y].value === "X"){
                    board[x][y].value++;
                }

                // top right
                
                if(x>0 && y<0 && board[x-1][y+1].value === "X"){
                    board[x][y].value++;
                }

                // right
                
                if(y<col-1 && board[x][y+1].value === "X"){
                    board[x][y].value++;
                }

                // 
                if(x<row-1 && y<col-1 && board[x+1][y+1].value === "X"){
                    board[x][y].value++;
                }

                if(x>0 && y>0 && board[x-1][y-1].value === "X"){
                    board[x][y].value++;
                }
                if(x<row-1 && board[x+1][y].value === "X"){
                    board[x][y].value++;
                }
            
                if(y>0 && board[x][y-1].value === "X"){
                    board[x][y].value++;
                }
                if(x>0 && y>0 && board[x-1][y-1].value === "X"){
                    board[x][y].value++;
                }
            
        }
    }


    return board;
}
export default CreateBoard;