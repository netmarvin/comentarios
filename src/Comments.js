import React from 'react'
import Comment from './Comment'

//refactor: de Stateful Components para Stateless Components...
//reference: https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541

const Comments = ({comments}) => {
    
    const keys = Object.keys(comments)
    
    return(
        <div>
            { keys.map( (key) => <Comment key={key} cmt={comments[key]} />)}
        </div>
    )
    
}

export default Comments


