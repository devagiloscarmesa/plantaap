import React, { Component } from 'react';
import { Tab } from 'react-bootstrap';
import Content1 from './Content1';

class ContenTab extends Component {
	
    
    constructor(props){
        super(props);
        this.state = {
            a : 1, 
            b : 2, 
            k : 0
        }
    }
    
	/*
    
    componentWillMount(){
        console.log("Se esta ejecutando el componentWillMount de ContenTab");
    }
    
    componentDidMount(){
        console.log("Se esta ejecutando el componentDidMount de ContenTab");
    }*/
    
    saludar = (e) =>{
        console.log("Este es un saludo!!!");
        this.setState({k:this.state.k+1});
    }
    
    render() {
        let componente;
        if(this.state.a < this.state.b){
            componente = <Content1 apellido = "perez" contenTab = {this}/>;
        }else{
            componente = "";
        }
        return (
            <div className="card-body">
                <Tab.Content>
                    <Tab.Pane eventKey="link-1">
                        {componente}
                        <p>Contador: {this.state.k}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="link-2">
                    </Tab.Pane>
                </Tab.Content>
            </div>
        );
    }
}

export default ContenTab;