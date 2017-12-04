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
         baseUrl: p['baseUrl'] || "",
         logo: p['logo'] || "logo.png",
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
            <Button floating large className='red' waves='light' icon='add' style={{position: 'fixed', bottom: '24px', right: '8px'}} onClick={e => this.punch()}/>
            <header className="App-header">
               <img src={this.state.logo} className="App-logo" alt="logo"/>
            </header>
            <div className="App-intro">
               <Punches punches={this.state.punches}/>
            </div>
            {this.state.errors.map((e, i) => (<div key={'error' + i} className="error">{e}</div>))}
         </div>
      );
   }
}
