import React, { Component } from 'react'

class Comment extends Component {

    render(){
        return(
            <div>Comentário: {this.props.texto}</div>
        )
    }
}

export default Comment