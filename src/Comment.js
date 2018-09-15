import React from 'react'

const Comment = ({cmt}) => {

    const comment = cmt.comment || ''
    
    return(
        <div>Comentário: { comment }</div>
    )
}

export default Comment

