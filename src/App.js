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
         .catch(e => this.state.errors.append(e));
   }

   render() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={this.state.logo} className="App-logo" alt="logo"/>
            </header>
            <div className="App-intro">
               <Row>
                  <Button onClick={c => this.key('down')}>Down</Button>
               </Row>
               <Punches punches={this.state.punches}/>
            </div>
            {this.state.errors.map((e, i) => (<div key={'error' + i} className="error">{e}</div>))}
         </div>
      );
   }
}
