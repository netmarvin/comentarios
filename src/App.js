import React, { Component } from 'react';
import Comments from './Comments'
import NewComment from './NewComment'

class App extends Component {

  state = {
    comments: [
      'Comment 01',
      'Comment 02',
      'Comment 03',
      'Comment 04'
    ]
  }

  //obs: Apesar da aplicação ter sido toda componentizada,
  //o gerenciamento do estado ficou no componente Pai, 
  //onde faz mais sentido... deixando para os componentes
  //filhos trabalhares com eventos e renderização da tela.
  sendComment = (newComment) => {
    this.setState({     
      comments: [...this.state.comments, newComment]
    })
  }

  render() {
    return (
      <div>
        <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
