import Button from "./Button"
export default function Experience({ exp, onDelete }) {

    const handleDelete = () => {
        onDelete(exp);
    };
    return (
        <div className="Experience_detail qualification_detail">
            <h2 className="Experience_detail_heading"> {exp.JobTitle}</h2>
            <p>{exp.Employer}</p>
            <Button text="Delete" onClick={handleDelete} classname="btn" />
            <div className="pd_line"></div>
        </div>
    )
}