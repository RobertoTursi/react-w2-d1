import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Col } from 'react-bootstrap';

import fantasy from "./data/fantasy.json"


import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
import SingleBook from './components/SingleBook';
import { Component } from 'react';

class App extends Component {
  state = {
    selected:false,
    bookAsin: null
  }
  render(){
    return (
      <>
        <Container>
          <Col>
            <SingleBook />
            <BookList array= {fantasy}/>
          </Col>
          <Col>
            <CommentArea />
          </Col>
        </Container>
        
        
      </>
    );
  }
  
}

export default App;


