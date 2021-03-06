import React, { Component } from 'react';
import Comments from './Comments'
import NewComment from './NewComment'
import { database } from './firebase'

class App extends Component {

  state = {
    comments: {},
    isLoading: false
  }

  //obs: Apesar da aplicação ter sido toda componentizada,
  //o gerenciamento do estado ficou no componente Pai, 
  //onde faz mais sentido... deixando para os componentes
  //filhos trabalhares com eventos e renderização da tela.
  sendComment = (comment) => {

    const id = database.ref().child('comments').push().key

    const comments = {}

    comments['/comments/'+id] = {
      comment
    }

    database.ref().update(comments)

    // this.setState({     
    //   comments: [...this.state.comments, newComment]
    // })
  }

  componentDidMount(){

    this.setState({ isLoading: true })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({ 
        comments: snapshot.val(), 
        isLoading: false
      })
    })

  }

  render() {
    return (
      <div>
        <h3>{process.env.REACT_APP_NAME}</h3>
        <hr />
        <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
        {
          this.state.isLoading && <h3>Carregando...</h3>
        }
      </div>
    );
  }
}

export default App;

