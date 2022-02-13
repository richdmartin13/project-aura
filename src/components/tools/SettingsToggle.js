import React from 'react';
import '../../App.css';
import { Button, InputGroup } from 'reactstrap';

export default function SettingsToggle(props) {
    return (
<Button
    style={{ background: "none", border: "none", padding: "10px", borderRadius: "50%" }}
    onClick={() => {
        props.setModalOpen(!props.modalIsOpen);
    }}
>
    <ion-icon name={props.icon} size="small" style={{ color: props.color, "--ionicon-stroke-width": "50px", transform: "scale(1.3)" }} />
</Button>
    )
}