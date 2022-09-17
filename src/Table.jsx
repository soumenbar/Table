import React, { useState } from 'react';

export default function Table(props){
    let[sum,setSum]=useState(0);
    let[col1,setCol1]=useState(0);
    let[col2,setCol2]=useState(0);
    let[col3,setCol3]=useState(0);
    console.log(sum);

    function handleRow1(e){
        setCol1(e.target.value) 
       setSum(parseInt(col1)+parseInt(col2)+parseInt(col3))
       
    }

  
    return(
        <>
            
                        <td><input type="number" defaultValue={col1} onBlur={(e)=>{handleRow1(e)}}/></td>
                        <td><input type="number" defaultValue={col2}/></td>
                        <td><input type="number" defaultValue={col3}/></td>
                        

                        <td><button onClick={(e)=>props.fun(e)}>Remove</button></td>
                        <td><input type="text" value={sum} onChange={(e)=>(e.target.value=sum)}/></td>
        
        </>
    );
}