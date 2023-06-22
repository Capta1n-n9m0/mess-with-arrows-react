import {useNavigate} from "react-router-dom";

export default function Home() {
    useNavigate()('/cursor-10');
    return (
        <div>
            <h2>Home</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
        </div>
    )
}