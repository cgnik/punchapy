import React, {Component} from 'react';
import {Table} from 'react-materialize';
import './Punch.css';

export default class Punches extends Component {
   render() {
      return (
         <div className="Punches">
            <Table>
               <thead>
               <tr>
                  <th>Punch Id</th>
                  <th>Timestamp</th>
               </tr>
               </thead>
               <tbody>
               {this.props.punches.map(p => <Punch data={p} key={p.pid}/>)}
               </tbody>
            </Table>
         </div>
      )
   }
}

export class Punch extends Component {
   constructor(props) {
      super(props);
      this.state = {pid: props.data.pid, date: props.data.timestamp};
   }

   render() {
      return (
         <tr>
            <td>{this.state.pid}</td>
            <td>{this.state.date}</td>
         </tr>
      );
   }
}
