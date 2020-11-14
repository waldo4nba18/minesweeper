import React from 'react'
import useSound from 'use-sound';
import boopSfx from '../assets/boop.mp3';
import plungerSfx from '../assets/plunger.mp3';
import biteSfx from '../assets/bite.mp3';
export default function Cell({details,updateFlag,revealcell}) {
    const [playOne]=useSound(plungerSfx,{volume:5.6});
    const [playTwo]=useSound(boopSfx,{volume:10.5});
    const [playThree]=useSound(biteSfx,{volume:10.5});
    const style={
        cellStyle:{
            width:40,
            height:40,
            backgroundColor:details.revealed && details.value!==0?details.value==='X'?'red':' #00226d':details.revealed&&details.value===0?'#00226f':'#000',
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
    const click=()=>{
        if(details.value==='X'){
            playTwo();
        }else{
            playOne();
        }
        revealcell(details.x,details.y);
        
    }
    const rightclick=(e)=>{
        updateFlag(e,details.x,details.y)
        playThree();
    }
    
    return (
        <div style={style.cellStyle} onClick={click} onContextMenu={rightclick}>
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


