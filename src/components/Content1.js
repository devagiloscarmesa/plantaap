import React, { Component } from 'react';
import { Alert, AlertContainer,AlertList } from "react-bs-notifier";
//https://chadly.github.io/react-bs-notifier/
const axios = require('axios').default;

class Content1 extends Component {
	constructor(props){
    	console.log("********************")
        console.log(props)
        console.log("********************")
        let contenTab = props.contenTab
        //contenTab.saludar();
        super(props);
        this.state = {
            plants: [], 
            plantsFilter: [], 
            nombre: "Pepito", 
            contenTab : contenTab
        };
        //console.log(props);
        //console.log("Se esta ejecutando el contructor (constructor)")
    }
    
    async componentWillMount(){
        console.log("Se esta ejecutando antes de montar el HTML (componentWillMount)");
    }
    
    async componentDidMount(){
        //console.log("Ya semonto el HTML en el DOM (componentDidMount)");
        //fetch
        //axios
        /*fetch('https://plants-backend.now.sh/plants')
        .then((respuesta) => {
            return respuesta.json();
        }).then((plantas) => {
            console.log(plantas);
            this.setState({
                plants : plantas
            });
        }) */
        
        /*let respuesta = await fetch('https://plants-backend.now.sh/plants');
        let plantas = await respuesta.json();
        this.setState({plants : plantas}); */
       
        try{
            
            var r1 = axios.get('https://plants-backend.now.sh/plants/1');
            var r2 = axios.get('https://plants-backend.now.sh/plants/2');
            var r3 = axios.get('https://plants-backend.now.sh/plants/3');
            
            
            r3.then( planta => {
                console.log("~~~~~~~~~~");
                console.log(planta);
                console.log("~~~~~~~~~~");
            });
            
            r1.then( planta => {
                console.log("~~~~~~~~~~");
                console.log(planta);
                console.log("~~~~~~~~~~");
            });
            
            r2.then( planta => {
                console.log("~~~~~~~~~~");
                console.log(planta);
                console.log("~~~~~~~~~~");
            });
            var respuesta = await axios.get('https://plants-backend.now.sh/plants');
            if(Array.isArray(respuesta.data))
                this.setState({plants : respuesta.data, plantsFilter: respuesta.data}); 
            else
                this.setState({plants : [respuesta.data], plantsFilter: [respuesta.data]}); 
        }catch(error){
            console.log("================");
            console.log(error);
            console.log(respuesta);
            console.log("================");
        }
        
        /*axios.get('https://plants-backend.now.sh/plants/13').
        then( (respuesta) => {
            this.setState({plants : [respuesta.data]}); 
        }).catch( (error, p) => {
            console.log(error)
        })*/
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log("=================")
        console.log(nextProps)
        console.log(nextState)
        console.log("=================")
        console.log("shouldComponentUpdate");
        let n1 = 1,  n2 = 8;
        if(n1 > n2)
            return false;
        else 
            return true;
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log("=================")
        console.log(nextProps)
        console.log(nextState)
        console.log("=================")
        console.log("componentWillUpdate");
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log("=================")
        console.log(prevProps)
        console.log(prevState)
        console.log("=================")
        console.log("componentDidUpdate");
    }
    
    componentWillUnmount(){
        alert("Hola desde componentWillUnmount");
    }
    
    cambiarNombrEstado = () => {
     //   alert("Click!!");
       // console.log();
     //   this.setProps({nombre: "Pedro"});
        this.setState({nombre:"Carlos"});
    }
    
    handleEnviarFormulario = async(e) => {
        e.preventDefault();
        let configuracion = {
            method : 'POST', 
            body : JSON.stringify({
                common_name: document.querySelector("#nombre_comum").value,
                family_name: document.querySelector("#nombre_familia").value,
                scientific_name: document.querySelector("#nombre_cintifico").value,
                cost: document.querySelector("#costo").value
            }), 
            headers:{
                'Content-Type': 'application/json'
            }
        };
        let respuesta = await fetch('https://plants-backend.now.sh/plants', configuracion);
        let plata = await respuesta.json();
        console.log(plata);
    }
    
    handleModificarFormulario = async(e) => {
        e.preventDefault();
        let data = {
            common_name: document.querySelector("#nombre_comum").value,
            family_name: document.querySelector("#nombre_familia").value,
            scientific_name: document.querySelector("#nombre_cintifico").value,
            cost: document.querySelector("#costo").value
        };
      
        let respuesta = await axios.put('https://plants-backend.now.sh/plants/34', data);
        //let plata = await respuesta.json();
        console.log(respuesta.data);
    }
    
    handleFiltroPlantas = e =>{
        let search_value = e.target.value;
        let plants_filter = this.state.plants.filter((plant) => {
            return plant.common_name.toLowerCase().search(search_value.toLowerCase()) != -1;
        });
        this.setState({plantsFilter:plants_filter})
    }
    
    handleBuscarFamilia = e => {
        let id = e.target.getAttribute('idplanta');
        
        console.log(id);
    }
    //delete
    render() {
        let plants = this.state.plantsFilter;
        const alerts = [{
            id: 1,
            type: "info",
            message: "Hello, world",
            timeout: 5
        }, {
            id: 2,
            type: "success",
            message: "Oh, hai"
        }]
        console.log("Se esta renderizando el HTML (render)");
        return (
            <article className="row">
        
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                    </div>
                    <input onKeyUp = {this.handleFiltroPlantas} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                </div>

                <article className="col-lg-12">
                    <table id="tbl-mensualidades" className="table table-bordered">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Nombre común</th>
                            <th>Nombre de Familia</th>
                            <th>Nombre Científico</th>
                            <th>Costo</th>
                            <th>Consultar Familia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plants.map((plant, id) => {
                                return (<tr key = {id}>
                                    <td>{plant.id}</td>
                                    <td>{plant.common_name}</td>
                                    <td>{plant.family_name}</td>
                                    <td>{plant.scientific_name}</td>
                                    <td>{plant.cost}</td>
                                    <td><a href = "#" onClick = {this.handleBuscarFamilia} idplanta = {id}>Consultar</a></td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                    <form>
                        <label>Nombre común	</label>
                        <input type = "text" id = "nombre_comum"></input>
                        
                        <label>Nombre de familia</label>
                        <input type = "text" id = "nombre_familia"></input>
                        
                        <label>Nombre Científico </label>
                        <input type = "text" id = "nombre_cintifico"></input>
                        
                        <label>Costo </label>
                        <input type = "text" id = "costo"></input>
                        
                        <input type = "submit" value = "enviar" onClick = {this.handleEnviarFormulario}/>
                        <input type = "submit" value = "Modificar" onClick = {this.handleModificarFormulario}/>
                        <input type = "button" value = "Saludar" onClick = {this.state.contenTab.saludar}/>
                    </form>
                 </article>            
                 <AlertList alerts={alerts} />

            </article>
        );
    }
}

export default Content1;