import React, { Component } from 'react'
import {connect} from 'react-redux';
import {setCiudad} from '../actions'

class ButtonCiudadContainer extends Component {
	
    handleAsignarCiudad = () =>{
          this.props.setCiudad("Medellin");
    }
  
      
    render() {
        return (
            <div>
                <button className = "btn btn-danger" onClick = {this.handleAsignarCiudad} >Asignar ciudad</button>
            </div>
        )
    }
}


const mapDispatchToPropsActions = dispatch => ({
    setCiudad : (value) => dispatch(setCiudad(value))
  });
  
export default connect(null, mapDispatchToPropsActions)(ButtonCiudadContainer);