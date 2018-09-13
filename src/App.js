import React, { Component } from 'react';

class App extends Component {

  state = {
    comments: [
      'Comment 01',
      'Comment 02',
      'Comment 03',
      'Comment 04'
    ]
  }

  sendComment = () => {
    this.setState({
      comments: [...this.state.comments, 'Comentário']
    })
  }

  render() {
    return (
      <div>
        {/* NewComment */}
        <div>
            <textarea></textarea>
            <button onClick={this.sendComment}>Enviar</button>
        </div>   
        { /* Comments */}     
        <div>
            { /* Comment */}
            { this.state.comments.map((itemComment) => {
                return <div key={itemComment}>{itemComment}</div>
            })}
        </div>
      </div>
    );
  }
}

export default App;
