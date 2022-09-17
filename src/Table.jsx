import React, { useState } from 'react';

export default function Table(props){
    let[sum,setSum]=useState(0);
    let[col1,setCol1]=useState(0);
    let[col2,setCol2]=useState(0);
    let[col3,setCol3]=useState(0);
    console.log(sum);


    function handleAdd(){
        if(isNaN(parseInt(col1)+parseInt(col2)+parseInt(col3)))
          setSum(0);
          else
        setSum(parseInt(col1)+parseInt(col2)+parseInt(col3))

        
        

    }

  
    return(
        <>
            
                        <td><input type='number' placeholder={0} onInput={(e)=>setCol1(e.target.value)}/></td>
                        <td><input type="number" placeholder={0} onInput={(e)=>setCol2(e.target.value)}/></td>
                        <td><input type="number" placeholder={0} onInput={(e)=>setCol3(e.target.value)}/></td>

                        <td><button onClick={handleAdd}>Row Sum +</button></td>
                        <td><input type="text" value={sum} onChange={(e)=>(e.target.value=sum)}/></td>
                        <td><button onClick={(e)=>props.fun(e)}>Remove Row</button></td>
                        
        
        </>
    );
}