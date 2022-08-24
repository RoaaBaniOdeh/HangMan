import React, { Component } from 'react';


class EndGame extends Component {
    render() {
        const isWinner=this.props.isWinner
        const jsx =isWinner ? <div className='winner'>Congratulations</div>:<div>`you are lost the word is ${this.props.word}`</div>
        return jsx
          
        
    }
}
export default EndGame