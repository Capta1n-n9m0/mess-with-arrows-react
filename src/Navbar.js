import {Link} from "react-router-dom";
import "./App.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <ul className="links">
                <li><Link to="./">Home</Link></li>
                <li><Link to="./cursor-10">Cursor 10</Link></li>
                <li><Link to="./cursor-50">Cursor 50</Link></li>
                <li><Link to="./cursor-100">Cursor 100</Link></li>
            </ul>
        </div>
    )
}