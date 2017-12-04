import React, {Component} from 'react';
import {Card} from 'react-materialize';
import './Punch.css';

export default class Punches extends Component {
   render() {
      return (
         <div className="Punches">
            {this.props.punches.map(p => <Punch data={p} key={p.pid}/>)}
         </div>
      )
   }
}

export class Punch extends Component {
   constructor(props) {
      super(props);
      this.state = {pid: props.data.pid, date: new Date(props.data.timestamp)};
   }

   render() {
      return (
         <Card>
            <p className="PunchId">{this.state.pid}</p>
            <p className="PunchTimestamp">{this.state.date.toDateString()}</p>
         </Card>
      );
   }
}
