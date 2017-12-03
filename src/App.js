import React, {Component} from 'react';
import './App.css';
import Roku from './services.js';
import {Row, Button} from 'react-materialize';

export default class App extends Component {
   constructor(props) {
      super(props);
      const p = props || {};
      var baseUrl = p['baseUrl'] || "http://localhost:8060";
      this.roku = new Roku({baseUrl: baseUrl});
   }

   key(keyid) {
      this.roku.keypress(keyid);
   }

   render() {
      return (
         <div className="App">
            <header className="App-header">
               {/*<img src={logo} className="App-logo" alt="logo"/>*/}
            </header>
            <div className="App-intro">
               <Row>
                  <Button onClick={c => this.key('up')}>Up</Button>
               </Row>
               <Row>
                  <Button onClick={c => this.key('left')}>Left</Button>
                  <Button onClick={c => this.key('play')}>Play<br/>Pause</Button>
                  <Button onClick={c => this.key('right')}>Right</Button>
               </Row>
               <Row>
                  <Button onClick={c => this.key('down')}>Down</Button>
               </Row>
            </div>
         </div>
      );
   }
}
