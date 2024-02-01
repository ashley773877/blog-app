import { Container, Title, Button } from "./components/styled";
//import Modal from './components/Modal.js';

import './App.css';
import Header from "./components/Header"
import Nav from './components/Nav'
import ArticleList from "./components/ArticleList";

//you can delete styled.js file and just add styled code here 
//const Container = styled.div`
//width: 80%
//margin: auto;
//text-align: center;
//`

function App() {
  return ( // order of components matters
    <Container>
      <Header/> 
      <Nav/>
      <ArticleList/>

    
    <Title>Blog App</Title>

    <Button>Home</Button>
    </Container>
  );
}

export default App;
