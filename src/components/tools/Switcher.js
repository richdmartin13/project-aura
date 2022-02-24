import '../../App.css';
import React from 'react'

export default function Switcher(props) {
    const [ active, setActive ] = React.useState();
    var profiles = ['Swiftech', 'Orbital Web', 'OneResume'];

    return (
        <div style={[{color: props.color, backgroundColor: props.bgColor, border: '1px solid #fff', 
                        borderColor: props.color, borderRadius: '10px', padding: '10px 20px',
                        display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'center'}, props.style]}>
            {props.children}
        </div>
    );
}