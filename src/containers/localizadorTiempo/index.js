import React, { Component } from 'react';
import Localizador from '../../components/localizador';
import DatosTiempo from'../../components/datosTiempo';
import serviceApi from '../../services/serviceApi';
const Location = "Valencia, es";


class LocalizadorTiempo extends Component
{

    constructor(props)
    {
        super(props);
        this.state={data:{}};
    }

    async componentDidMount(){
        try {
            let data = await serviceApi.getData();
            this.setState({data: data});
        }catch(error){
            console.error(error);
        }
    }


    render(){

        const {data} = this.state;
        return(
            <div>
                <h2>Contenedor Localizador Tiempo</h2>
                <Localizador location={Location}/>
                <DatosTiempo data={data} />
            </div>
        )
    }

}

export default LocalizadorTiempo;