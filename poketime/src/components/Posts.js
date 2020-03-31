import React, { Component } from 'react';
import axios from 'axios'

class Posts extends Component
{
    state = {
        post : null
    }
    componentDidMount()
    {
        let id = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(post => {
            this.setState({
                post : post.data
              
            })
        })
        
    }
    render()
    {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div>
                <h4>Post loading...</h4>
            </div>
        )
        return(
        <div>{post}</div>
        )
    }
}

export default Posts
