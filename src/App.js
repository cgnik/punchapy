import React, {Component} from 'react';
import {Row, Button} from 'react-materialize';

import './App.css';
import PunchApi from './services.js';
import Punches from './Punch.js';

export default class App extends Component {
   constructor(props) {
      super(props);
      const p = props || {};
      this.state = {
         baseUrl: p['baseUrl'] || "http://localhost:8060",
         logo: p['logo'] || "logo.jpeg",
         punches: [],
         errors: []
      }
      this.punchapi = new PunchApi({baseUrl: this.state.baseUrl});
      this.refresh();
   }

   refresh() {
      this.punchapi.listPunches()
         .then(pl => this.setState({punches: pl || []}))
         .catch(e => this.state.errors.push(e));
   }

   punch() {
      this.punchapi.newPunch({timestamp: (new Date()).toISOString()})
         .then(x => this.refresh())
         .catch(e => this.state.errors.push(e));
   }

   render() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={this.state.logo} className="App-logo" alt="logo"/>
            </header>
            <div className="App-intro">
               <Row>
                  <Button onClick={e => this.punch()}>Punch!</Button>
               </Row>
               <Punches punches={this.state.punches}/>
            </div>
            {this.state.errors.map((e, i) => (<div key={'error' + i} className="error">{e}</div>))}
         </div>
      );
   }
}
