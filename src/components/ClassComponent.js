import React, { Component } from 'react'

export class ClassComponent extends Component {
	state = {
        contador : 1
    }
    render() {
        return (
            <div>
                El valor del contador es : {this.state.contador}
                <button className = "btn btn-primary" onClick={() => this.setState({contador : this.state.contador * 3}) }>Aumentar</button>
            </div>
        )
    }
}
