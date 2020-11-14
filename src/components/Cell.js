import React,{useState} from 'react'
export default function Cell({details,updateFlag,revealcell}) {

    const style={
        cellStyle:{
            width:40,
            height:40,
            backgroundColor:details.revealed && details.value===0?' #00226d':'#000',
            opacity:'0.8',
            border:'3px solid white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'20px',
            cursor:'pointer',
            color:'cyan',
            fontWeight:'1000'
        },
    }
    
    return (
        <div style={style.cellStyle} onClick={()=>{revealcell(details.x,details.y)}} onContextMenu={(e)=>updateFlag(e,details.x,details.y)}>
            {!details.revealed && details.flagged ? (
        "🚩"
      ) : details.revealed && details.value !== 0 ? (
        details.value === "X" ? (
          "💣"
        ) : (
          details.value
        )
      ) : (
        ""
      )}
        </div>
    )
}


