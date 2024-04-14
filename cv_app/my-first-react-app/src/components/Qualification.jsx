import Button from "./Button";
export default function Qualification({ qual, onDelete }) {
  return (
    <div className="qualification_detail">
      <div className ="qualification_course_and_university">
        <h2>{qual.Course_Name}</h2>
        <p>{qual.University_School}</p>
      </div>
      <button className="btn" onClick = { () => onDelete(qual) } >
        Delete
      </button>

      <div className = "pd_line "></div>
    </div>

  )
};
