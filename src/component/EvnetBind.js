import React, { Component } from 'react'

 class EvnetBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }
    eventHanderler(){
        this.setState ({
            message:'Good Bye'})
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
               {/*<button onClick= {this.eventHanderler.bind(this)}>Click</button>*/}
               <button onClick= {()=>this.eventHanderler()}>Click</button>
            </div>
        )
    }
}

export default EvnetBind
