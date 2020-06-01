import React, { Component } from 'react';

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
        console.log("Ya semonto el HTML en el DOM (componentDidMount)");
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
        })*/
        
      /*  let respuesta = await fetch('https://plants-backend.now.sh/plants');
        let plantas = await respuesta.json();
        this.setState({plants : plantas});*/
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log("=================")
        console.log(nextProps)
        console.log(nextState)
        console.log("=================")
        console.log("shouldComponentUpdate");
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
    
    cambiarNombrEstado = () => {
     //   alert("Click!!");
       // console.log();
     //   this.setProps({nombre: "Pedro"});
        this.setState({nombre:"Hola nombre"});
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
                    <button className = "btn btn-primary" onClick={this.cambiarNombrEstado}>Cambiar nombre!!!</button>
                 </article>
            </article>
        );
    }
}

export default Content1;