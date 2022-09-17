import { useState } from "react";

import Table from "./Table";


function App() {
  let[row,setRow]=useState([]);
  function handleRemove(e){
    
    e.target.parentNode.parentNode.remove()

  }


  console.log(row);
    
  return (
    <div className="App">
      {/* <Form/> */}
      <table>
                <thead>
                  

                </thead>
                <tbody>
                  {row.map((ele,index)=>
                    <tr key={index} id={index}>
                    <Table fun={handleRemove}/>
                    </tr>)
                    }
                  
                 </tbody>
      </table>   
      <button onClick={()=>setRow([...row,1])}>Add</button>         
      
 
    </div>
  );
}

export default App;
