import React, { Component } from 'react';
const axios = require('axios').default;

class Content1 extends Component {
	constructor(props){
        super(props);
        this.state = {
            plants: [], 
            nombre: "Pepito"
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
            var respuesta = await axios.get('https://plants-backend.now.sh/plants/1');
            if(Array.isArray(respuesta.data))
                this.setState({plants : respuesta.data}); 
            else
                this.setState({plants : [respuesta.data]}); 
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
        console.log(document.querySelector("#nombre_comum").value);
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
    
    render() {
        let {plants} = this.state;
        console.log("Se esta renderizando el HTML (render)");
        return (
            <article className="row">
                <article className="col-lg-12">
                    <table id="tbl-mensualidades" className="table table-bordered">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Nombre común</th>
                            <th>Nombre de Familia</th>
                            <th>Nombre Científico</th>
                            <th>Costo</th>
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
                    </form>
                 </article>
            </article>
        );
    }
}

export default Content1;