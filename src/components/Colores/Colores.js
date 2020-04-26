import React, {Component} from 'react';
import './Colores.css'

class Colores extends Component{
    cambiarColor() {
        document.querySelector("li").style.backgroundColor = "Pink";
    }
    render() {
        return(
        <div>
            <ul className="ul">
                {this.props.colores.map ((color, i) => 
                <li key= {color + i} onClick={() => this.cambiarColor()}> {color} </li>)}
            </ul>
        </div>
        );
    }
}

export default Colores;