export default function Button({ text , onClick ,classname}) {
    return (
        <button onClick = {onClick} className = {`${classname} btn`}> {text}</button>
    );
}