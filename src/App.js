import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import NCursors from "./NCursors";
import {useEffect, useState} from "react";
import Button from "./Button";

const homepage = require("../package.json").homepage;
function App() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({x: event.clientX, y: event.clientY});
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path={homepage} element={<Home/>}/>
                    <Route path={homepage+"/cursor-10"} element={[<NCursors count={10} mouse={mousePosition}/>, <Button next={'/cursor-50'} text={'Next'}/>]}/>
                    <Route path={homepage+"/cursor-50"} element={[<NCursors count={50} mouse={mousePosition}/>, <Button next={'/cursor-100'} text={'Next'}/>]}/>
                    <Route path={homepage+"/cursor-100"} element={[<NCursors count={100} mouse={mousePosition}/>, <Button next={'/cursor-10'} text={'Restart'}/>]}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
