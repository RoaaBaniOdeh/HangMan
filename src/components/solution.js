import React, { Component } from 'react';
import Letter from './letter';


class Solution extends Component {

    render() {
        let word=this.props.solution.word
        let letterStatus= this.props.letterStatus
        return  (<div>{word.split('').map(w=>letterStatus[w]?<Letter letter={w}/>:<Letter letter='_'/>)}<div>{this.props.solution.hint}</div></div>)
        
    }
}
export default Solution