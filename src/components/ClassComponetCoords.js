import React, { Component } from 'react'

export default class ClassComponetCoords extends Component {
	state = {
        latitud : null, 
        longitud : null
    }
    
    constructor(props){
        super(props);
        let {latitud, longitud} = props;
        this.state = {
            latitud : latitud, 
            longitud : longitud
        }
    }
    
    componentDidMount(){
        this.idGeo = navigator.geolocation.watchPosition((position) => {
            this.setState({
                latitud : position.coords.latitude, 
                longitud : position.coords.longitude
            })
        });
    }
    
    setLatitud(latitud){
        this.setState({latitud:latitud});
    }
    
    componentWillUnmount(){
        console.log("Parar el escuchador")
        navigator.geolocation.clearWatch(this.idGeo);
    }
    
    render() {       
        return this.state.latitud == null?(
            <div>
               Cargando ... 
            </div>
        ) : (
            <div>
                <h4>Latitud: {this.state.latitud}</h4>
                <h4>Longitud: {this.state.longitud}</h4>
            </div>
        );
    }
}
