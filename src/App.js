import React, { Component } from 'react';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import {setCiudad} from './actions'
import { Tab } from 'react-bootstrap';
import Header from './components/Header';
import MenuTab from './components/MenuTab';
import ContenTab from './components/ContenTab';
import {MiComponente1,MiComponente} from './components/FunctionComponent';
import {ClassComponent} from './components/ClassComponent';
import Coords from './components/ClassComponetCoords';
import FCoords from './components/FuncionComponentCoords';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss'; 

class App extends Component{
  
  handleAsignarCiudad = () =>{
    setCiudad("Medellin");
  }
  
  render(){
    return (
      <div className="App">
        {/*}<section id="page-grid" className="container-fluid">
            <Header/>
            <section id="main">
              <Tab.Container defaultActiveKey="link-1">
                <div className="card text-center">
                  <MenuTab/>
                  <ContenTab/>
                </div>
              </Tab.Container>
            </section>
    </section> {*/}
      <button className = "btn btn-danger" onClick = {this.handleAsignarCiudad} >Asignar ciudad</button>
      </div>
    );
  }
}

const mapDispatchToPropsActions = dispatch => ({
  setCiudad : (value) => dispatch(setCiudad(value))
});

export default connect(null, mapDispatchToPropsActions)(App);

//export default App;
