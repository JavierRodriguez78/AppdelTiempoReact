import React, { Component } from 'react';


class DatosTemperatura extends Component
{
    constructor(...props)
    {
        super(...props)
    }

    render(){
        const {temp, viento, humedad} = this.props;
        return(
            <div >
                <h1>{temp} ºC</h1>
                <div>
                    <span>Humedad {humedad} %</span>
                    <span> Velocidad Viento {viento} km/h</span>
                </div>
            </div>
        )
    }

}

export default DatosTemperatura;