import React, { Component } from 'react';

class AddTodo extends Component
{
    state = {
        content : ''
    }

    handlechange = (e) =>
    {
        this.setState({
            content : e.target.value
        })
    } 
    
    handlesubmit = (e) => 
    {
        e.preventDefault();
        this.props.addtodo(this.state)
        this.setState({
            content : ' '
        })
    } 
    render()
    {   
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label>Add To Do</label>
                    <input type="text" onChange={this.handlechange} value={this.state.content}></input>
                </form>
            </div>
        )

    }
    
}

export default AddTodo;