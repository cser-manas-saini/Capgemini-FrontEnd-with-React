import ClassBased from "./ClassBased";
import ClassBased2 from "./ClassBased2";
import FunctionBased3 from "./FunctionBased3";
import ArrowFunction from "./FunctionBased";
import FunctionBased2 from "./FunctionBased2";
import ConditionalRendering from "./ConditionalRendering";
import ControlledForm from "./ControlledForm";
import Component1 from "./Component1";
import ApiCalling from "./ApiCalling";
import ComponentWithDependency from "./ComponentWithDependency";
import ComponentWithRender from "./ComponentWithRender";
import ComponentCleanUp from "./ComponentCleanUp";
import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);
  return (
    <div>
    {/* <ClassBased/> */
    (()=>{
      return <h2>Function based</h2>
    })()
    }

    {/* <ArrowFunction/>
    <FunctionBased2 /> */}

    {/* <FunctionBased3 />
     */}
     {/* {<ConditionalRendering/>} */}
     {/* <ControlledForm/> */}
     {/* <Component1/> */}
    {/* <ApiCalling/> */}
    <ComponentWithDependency />
    {count}
        <button onClick={()=>{
          setCount(count+1)
        }}>Increment</button>
      
      {/* <ComponentConstructor/> */}

      {/* <ComponentWithRender/> */}

      {/* <ComponentWithDependency/> */}


      {/* {!(count%5 == 0) && <ComponentCleanUp/>} */}

  </div>
  )
}

export default App