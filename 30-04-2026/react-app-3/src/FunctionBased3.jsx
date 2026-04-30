import { useState } from "react";

function FunctionBased3(){
    let [state, setState] = useState(100);
    let a=20;
    return(
        <>
            {/* <h2>This is Function Based Component.</h2> */}

            {a}
            <hr />
            <button onClick={()=>{
                // a += 20;
                setState(state+10);
                console.log("--------------");
                console.log(a);
                console.log("--------------");
                
            }}>Increment</button>
            <h1>{state}</h1>
        </>
    )
}
export default FunctionBased3;