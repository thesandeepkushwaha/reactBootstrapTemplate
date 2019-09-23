import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Download from './component/Download';
import Features from './component/Features';
import Detail from './component/Detail';
import Page4 from './component/Page4';
import Carousels from './component/Carousel';
class App extends Component {

  render() {
    return (
      <div className="fBody">
        <Header></Header>
        <div className='backgroundImage'>
        <Download></Download>
        </div>
        <Features></Features>
            <Detail></Detail>
            <Page4></Page4>
      <Carousels></Carousels>
      </div>
          );
        }
      }
      
      export default App;
