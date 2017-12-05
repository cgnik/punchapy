import React, {Component} from 'react';
import {Card, Button} from 'react-materialize';
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

   delete() {
      console.log("Delete " + this.state.pid);
   }

   render() {
      return (
         <Card className="Punch">
            <div>{this.state.date.toLocaleTimeString()}</div>
            <Button floating small className='blue' waves='light' icon='delete'
                    onClick={e => this.delete()}/>
         </Card>
      );
   }
}
