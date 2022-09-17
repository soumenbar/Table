import React, { useState } from "react";


export default function Form() {
    let[name,setName]=useState("");
    let[pass,setPass]=useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        fetch("./login.json",{
            method:'POST',
            body: JSON.stringify({
                name:name,
                pass:pass
            }),
            headers:{
                "Content-type":"json; charset=UTF-8"
            }
        }).then((res)=>res.json())
        .then((data)=>console.log(data))
        .catch((error)=>console.log(error))

    }

    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                Name: <input type="text" onChange={(e)=>setName(e.target.value)}/><br></br>
                Password:<input type="text" onChange={(e)=>setPass(e.target.value)}/><br></br>
                <button type="submit">Login</button>
            </form>
  
        </div>
    );
}