import Cursor from "./Cursor";

export default function NCursors({count, mouse}){
    const cursors = [];
    cursors.push(<Cursor mouse={mouse} initial={{x: 0, y: 0}}/>);
    for (let i = 0; i < count*4; i++) {
        cursors.push(<Cursor mouse={mouse}/>);
    }
    return (
        <div>
            <h2>{`Cursors ${count}`}</h2>
            {cursors}
        </div>
    )
}