import { useState } from "react"

const ControlledForm = ()=>{
    let [student, setStudent ] = useState({name:null, email:null})
    function updateTheState(e){
        setStudent(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    return (
        <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            console.log(student);
            
        }} >
            <div>
                <label htmlFor="a"></label>
                <input type="text" name="userName" onChange={(e)=>{updateTheState(e)}} id="userName" />
            </div>
            <div>
                <label htmlFor="a"></label>
                <input type="password" name="password" onChange={(e)=>{updateTheState(e)}} id="password" />
            </div>
            <button>Submit</button>
        </form>
        </>
    )
}
export default ControlledForm