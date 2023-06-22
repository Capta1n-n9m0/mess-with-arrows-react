import Cursor from "./Cursor";

export default function Home({mouse}) {
    return (
        <div>
            <h2>Home</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
            <Cursor mouse={mouse} initial={{x: 0, y: 0}}/>
        </div>
    )
}