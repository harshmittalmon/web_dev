import Button from "./Button"
export default function Experience({exp,onDeleteExperience}){
    const handleDelete = ()=> {
        onDeleteExperience(exp);
    };
    return(
        <div className="display_Experience">
            <h2> {exp.JobTitle}</h2>
            <p>{exp.Employer}</p>
            <Button text ="Delete" onClick={handleDelete} classname="btn"/>
        </div>
    )
}