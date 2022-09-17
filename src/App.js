import { useState } from "react";

import Table from "./Table";


function App() {
  let[row,setRow]=useState([]);
  let[count,setCount]=useState(0);
  function handleRemove(e){
    setCount(count-1);
    e.target.parentNode.parentNode.remove()

   

  }
  function handleAdd(){
    setRow([...row,1]);
    setCount(count+1);
  }


  console.log(row);
    
  return (
    <div className="App">
      {/* <Form/> */}
      <table>
                {count>0 && <thead>
                  
                 <tr>
                    <td>Column1</td>
                    <td>Column2</td>
                    <td>Column3</td>
                    <td></td>
                    <td>Addition</td>


                  </tr>
                  

                </thead>}
                <tbody>
                  {row.map((ele,index)=>
                    <tr key={index} id={index}>
                    <Table fun={handleRemove}/>
                    </tr>)
                    }
                  
                 </tbody>
      </table>   
      <button onClick={()=>handleAdd()}>Add</button>         
      
 
    </div>
  );
}

export default App;
