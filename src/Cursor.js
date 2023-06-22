import cursor from './cursor.svg';
import {useState} from "react";

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Cursor({mouse, initial}){
    let [reference, setReference] = useState(
        {
            x: initial ? initial.x : randomInt(-window.innerWidth, window.innerWidth),
            y: initial ? initial.y : randomInt(-window.innerHeight, window.innerHeight)}
    );
    let size = Math.random() * 4 + 26;
    const cursorStyle = {
        position: 'absolute',
        left: mouse.x - reference.x,
        top: mouse.y - reference.y,
        width: size,
        height: size,
        zIndex: '10',
    };
    return(
        <div style={cursorStyle}>
            <img src={cursor} alt='cursor'></img>
        </div>
    )
}