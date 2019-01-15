import React, {Component} from 'react';
import WeatherIcons from 'react-weathericons';

const EstadoTiempo = estadoTiempo=>{
    switch (estadoTiempo[0].main) {
        case "Clouds":
            return "cloud";
        case "Sun" :
            return "day-sunny";
        case "rain":
            return "rain";
        default:
            return "day-sunny"

    }
}

class IconoTiempo extends Component
{

    constructor(props)
    {
        super(props);
    }

    render(){
        const {icono} = this.props;
        return (<div>
            <WeatherIcons name={icono.weather? EstadoTiempo(icono.weather): 'sun' } size="2x"></WeatherIcons>
        </div>)
    }

}

export default IconoTiempo;