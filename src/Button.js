import {useState} from "react";
import {Link} from "react-router-dom";

export default function Button({text, next}) {
    const [reference, setReference] = useState({
        x: Math.random() * (window.innerWidth - 170) + 170,
        y: Math.random() * window.innerHeight,
    });
    let handleClick = () => {setReference({
        x: Math.random() * (window.innerWidth - 170) + 170,
        y: Math.random() * window.innerHeight,
    });};

    // rounded box with text
    const style = {
        backgroundColor: 'yellow',
        color: 'black',
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid black',
        position: 'absolute',
        left: reference.x,
        top: reference.y,
        zIndex: '20',
    }
    return (
        <Link to={next} onClick={handleClick} style={style}>{text}</Link>
    )
}