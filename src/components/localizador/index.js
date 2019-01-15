import React, { Component } from 'react';
import './localizador.css';

class Localizador extends Component{

    constructor(...props){
        super(...props);
    }

    render(){
        const {location} = this.props;
        return(
            <div id="Localizador">
                <h1>{location}</h1>
            </div>
        )
    }
}

export default Localizador;