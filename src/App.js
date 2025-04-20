import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav'
import './assets/fonts/fonts.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
