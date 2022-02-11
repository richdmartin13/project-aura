import React from 'react';
import '../../App.css';
import { Button, InputGroup } from 'reactstrap';
import { ThemeContext, themes } from '../../theme/themeContext';
import { colors } from '../../config/config'

export default function DarkToggle(props) {
    return (
        <InputGroup>
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <Button
                        style={{ background: "none", border: "none", padding: "10px", borderRadius: "50%" }}
                        onClick={() => {
                            props.setDarkMode(!props.darkMode);
                            changeTheme(props.darkMode ? themes.light : themes.dark);
                        }}
                    >
                        <ion-icon name={props.darkMode ? "moon-outline" : "sunny-outline"} size="small" style={{ color: props.color, "--ionicon-stroke-width": "50px", transform: "scale(1.1)" }} />
                    </Button>

                )}
            </ThemeContext.Consumer>
        </InputGroup>
    )
}