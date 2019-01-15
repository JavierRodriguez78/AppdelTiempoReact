import React, {Component} from'react';
import DatosTemperatura from './datosTemperatura';
import IconoTiempo from './iconoTiempo';

import Conversor from 'convert-units';

class DatosTiempo extends Component
{
    constructor(props){
        super(props);
    }

    calcularTemperatura(temperatura){
        return Math.round(Conversor(temperatura).from('K').to('C')*100)/100;
    }

    calcularViento(viento){
        return Math.round(Conversor(viento).from('m/s').to('km/h')*100)/100;
    }

    render(){
        const {data} = this.props;
        const TemperaturaBase = 24 ;
        const VientoBase = 5;
        const HumedadBase= 20;

        return(
            <div>
                <h1>Datos Tiempo</h1>
                <IconoTiempo icono={data} />
                <DatosTemperatura temp={data.main ? this.calcularTemperatura(data.main.temp) : TemperaturaBase}
                viento ={data.wind? this.calcularViento(data.wind.speed) : VientoBase}
                humedad={data.main?data.main.humidity: HumedadBase}/>
            </div>
        )
    }


}

export default DatosTiempo;