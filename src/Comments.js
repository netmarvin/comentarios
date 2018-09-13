import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {

    render(){
        return(
            <div>
            { this.props.comments.map( (itemComment) => <Comment key={itemComment} texto={itemComment} />)}
            </div>
        )
    }
    
}

export default Comments
