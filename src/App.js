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
                  <tr>
                    <td>Column1</td>
                    <td>Column2</td>
                    <td>Column3</td>
                    <td></td>
                    <td>Addition</td>


                  </tr>
                  

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
