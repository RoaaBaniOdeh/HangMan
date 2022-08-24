import React, { Component } from 'react';
import Letter from './letter';


class Letters extends Component {
    render() {
        let letters=this.props.letterStatus
        return (<div>
           <div>the Avilable letters!</div>
           {Object.keys(letters).map(l=>letters[l]?<Letter letter={l} className='checked' selectLetter={this.props.selectLetter}/>:<Letter letter={l}  selectLetter={this.props.selectLetter}/>)}
        </div>)
    }
}
export default Letters