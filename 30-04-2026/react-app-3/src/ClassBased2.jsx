import { Component } from "react";

class ClassBased2 extends Component{
    constructor(){
        super();
        console.log(this);
        
    }

    render(){
        return <h2>This is class Based Component 2 </h2>
    }
}

export default ClassBased2;