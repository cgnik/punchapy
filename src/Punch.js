import React, {Component} from 'react';
import './Punch.css';

export default class Punch extends Component {
   constructor(props){
      super(props);
      this.state = { date: new Date(props.data.timestamp) };
   }

   render() {
      return (
         <div className="Punch">
            <div>PUNCH: {this.state.date.toISOString()}</div>
         </div>
      );
   }
}
