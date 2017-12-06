import React, {Component} from 'react';
import {Card, Button} from 'react-materialize';
import './Punch.css';

export default class Punches extends Component {
   render() {
      return (
         <div className="Punches">
            {this.props.punches.map(p =>
               <Punch data={p} key={p.pid} deletePunch={this.props.deletePunch}/>
            )}
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
         <Card className="Punch">
            <span>{this.state.date.toLocaleTimeString()}</span>
            <Button floating className="blue" waves="light" icon="delete"
                    onClick={this.props.deletePunch(this.state.pid)}/>
         </Card>
      );
   }
}
