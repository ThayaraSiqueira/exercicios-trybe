import React from 'react';
import './App.css';
import './Header';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <Content />
      <Footer />
      </div>
    );
  }
}

export default App;
