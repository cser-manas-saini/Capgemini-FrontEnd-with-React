import { useState } from "react"
import Component2 from "./Component2"
import Component3 from "./Component3"

function Component1(){
    let [num, setNum] = useState({count:0})
    return <>
    <h1>The Current Count is {num.count} </h1>
    {/* <Component2 by = "Gautam" class = {["Ram", "Shyam", "Gopi"]} info = {{class: "Class is Getting Shifted"}} /> */}

    <Component2 {...{num,setNum}}  />
    <Component3 currentNum = {{num,setNum}} />
    </>
}

export default Component1