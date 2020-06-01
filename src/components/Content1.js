import React, { Component } from 'react';

class Content1 extends Component {
	constructor(props){
        super(props);
        this.state = {
            plants: []
        };
    }
    
    async componentDidMount(){
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
        
        let respuesta = await fetch('https://plants-backend.now.sh/plants');
        let plantas = await respuesta.json();
        this.setState({plants : plantas});
    }
    
    render() {
        let {plants} = this.state;
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
                </article>
            </article>
        );
    }
}

export default Content1;