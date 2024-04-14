import { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from 'uuid';

export default function AddExperience({
  
  onDeleteExperience,
  onAddExperience,
  experiences,
  handleFormState
}) {
  const [JobTitle, setJobTitle] = useState();
  const [Employer, setEmployer] = useState();
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const [Description, setDescription] = useState();

  function onHandleSubmit(e) {
    e.preventDefault();
    const new_obj = {
      JobTitle,
      Employer,
      StartDate,
      EndDate,
      Description,
      id : uuidv4()
    };
    console.log(new_obj);
    onAddExperience(new_obj);
    setJobTitle("");setDescription("");setStartDate("");setEndDate("");setEmployer("");

    handleFormState();

  }

  return (
    <form className="add_qualification_form" >
      <label className="label">
        <p>Job Title</p>
        <input type="text" onChange={(e)=>{ setJobTitle(e.target.value)}}/>
      </label>
      <label className="label">
        <p>Employer</p>
        <input type="text" onChange={(e)=>{ setEmployer(e.target.value)}}/>
      </label>
      <label className="label">
        <p>Start Date</p>
        <input type="text" onChange={(e)=>{ setStartDate(e.target.value)}} />
      </label>
      <label className="label">
        <p>End Date</p>
        <input type="text" onChange={(e)=>{ setEndDate(e.target.value)}}/>
      </label>
      <label className="label">
        <p>Description</p>
        <input type="text" onChange={(e)=>{ setDescription(e.target.value)}} />
      </label>
      <Button  text = "Add" classname = "btn" onClick={onHandleSubmit} />
    </form>
  );
}
