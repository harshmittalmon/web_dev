import Button from "./Button"
export default function Experience({ exp, onDelete }) {

    const handleDelete = () => {
        onDelete(exp);
    };
    return (
        <div className="display_Experience">
            <h2> {exp.JobTitle}</h2>
            <p>{exp.Employer}</p>
            <Button text="Delete" onClick={handleDelete} classname="btn" />
        </div>
    )
}