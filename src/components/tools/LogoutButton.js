import React from 'react';
import '../../App.css';
import { Button, InputGroup } from 'reactstrap';
import { baseURL } from '../../config/config';

export default function LogoutButton({visible, color}) {
    if(visible) {
        return (
            <InputGroup>
                        <Button
                            style={{ background: "none", border: "none", padding: "10px", borderRadius: "50%", transform: "scale(1.1)" }}
                            onClick={() => {
                                window.localStorage.removeItem("token");
                                window.location.replace(baseURL);
                            }}
                        >
                            <ion-icon name={"exit-outline"} size="small" style={{ color: color, "--ionicon-stroke-width": "50px", transform: "scale(1.1)" }} />
                        </Button>
    
            </InputGroup>
        )
    } else {
        return (<span></span>)
    }
}