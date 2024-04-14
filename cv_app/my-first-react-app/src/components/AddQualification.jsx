import { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from 'uuid';
export default function AddQualification({onHandleAddQualification,onToggleAddQualification}) {
  const [Course_Name, set_Course_Name] = useState("");
  const [University_School, set_University_School] = useState("");
  const [Start_Date, set_Start_Date] = useState("");
  const [End_Date, set_End_Date] = useState("");
  const [Grade_Obtained, set_Grade_Obtained] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    if( !Course_Name || !University_School )return;
    const new_qual = {
        Course_Name,
        University_School,
        Start_Date,
        End_Date,
        Grade_Obtained,
        id : uuidv4()
    }
    onHandleAddQualification(new_qual);
    
    set_Course_Name("");
    set_University_School("");
    set_Start_Date("");
    set_End_Date("");
    set_Grade_Obtained("");// why not all values become empty 
    onToggleAddQualification();

  }
  return (
    
      <form onSubmit={handleSubmit} className = "add_qualification_form">
        <h2 className ="add_qualification_form_heading">Add Qualification </h2>
        <label className="label">
          <p>Course</p>
          <input
            name=""
            id=""
            onChange={(e) => set_Course_Name(e.target.value)}
          />
        </label>
        <label className="label">
          <p>University</p>
          
          <input
            type="text"
            onChange={(e) => set_University_School(e.target.value)}
          />
        </label>
        <label className="label">
          <p>Start Date</p>
          
          <input type="text" onChange={(e) => set_Start_Date(e.target.value)} />
        </label>
        <label className="label">
          <p>End Date</p>
          
          <input type="text" onChange={(e) => set_End_Date(e.target.value)} />
        </label>
        <label className="label">
          <p>Grade Obtained</p>
          
          <input
            type="number"
            onChange={(e) => set_Grade_Obtained(e.target.value)}
          />
        </label>
        <Button text="Add" classname="individual_qualification_add" />
      </form>
    
  )
}
