import React, { Component } from 'react';
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
/*	let c = <Coords latitud = {23} longitud = {76}/>
  console.log("========")
  console.log(c);
  console.log("========") */
  render(){
    return (
      <div className="App">
          { /*<FCoords/>
        {c}*/}
        <section id="page-grid" className="container-fluid">
            <Header/>
            <section id="main">
              <Tab.Container defaultActiveKey="link-1">
                <div className="card text-center">
                  <MenuTab/>
                  <ContenTab/>
                </div>
              </Tab.Container>

            </section>
          </section> 
      </div>
    );
  }
}

export default App;
