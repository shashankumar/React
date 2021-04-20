import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             Comment : ''
        }
    }

    handleUsername = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    textChange = event =>{
        this.setState({
            Comment : event.target.value
        })
    }
    handlerforsubmit = event =>{
        alert(`${this.state.username} ${this.state.Comment}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handlerforsubmit}>
            <div>
                welcome shashank
                <label>Name</label>
                <input type='text' 
                value={this.state.username} 
                onChange={this.handleUsername}
                />
                </div>
                <div>
                <textarea type='Text' value={this.setState.Comment} onChange={this.textChange}></textarea>
            </div>
            <button>Submit</button>
            </form>
        )
    }
}

export default Form
