import React, {useState} from 'react';

const ColoresHook = ({colores}) => {

    const [colorActual,setColor] = useState('black');
    return (
        <div>
            <ul className="ul">
                {colores.map ((color, i) =>
                    <li key={i}> <button onClick={() => setColor(color)}> {color} </button>  </li>)}
            </ul>
            <div className={'circulito'} style={{backgroundColor: colorActual}} />

        </div>
    );
};

export default ColoresHook;