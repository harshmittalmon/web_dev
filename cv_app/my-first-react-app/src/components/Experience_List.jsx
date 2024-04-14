import { useState } from "react";
import Experience from "./AddExperience";
import Button from "./Button";
import AddExperience from "./AddExperience"
export default function ({
  onAddExperience,
  onDeleteExperience,
  experiences,  
}) {
  const [ FormState, setFormState] = useState(false);
  function handleFormState(){
    setFormState(FormState=> !FormState);
  }
  return (
    <div className="qualifications">
        <h3>Experiences</h3> 
        <div className="pd_line"></div>
        
        <ul>
            {
                experiences.map(
                    (exp)=>(
                        <Experience  key = {exp.id} exp = {exp } onDelete = {onDeleteExperience}
                        />
                    )   
                )
            }
        </ul>

        {
            !FormState  &&
            <Button text = "Add Experience" classname="add_qualification" onClick={handleFormState} />
        }
        {
            FormState && 
            <AddExperience
            
             onDeleteExperience = {onDeleteExperience}
             onAddExperience = {onAddExperience}
             experiences = { experiences }
             handleFormState = {handleFormState}
            />
        }
        
        {
            FormState && <Button text ="Cancel" classname ="add_qualification" onClick={handleFormState}/>
        }
    </div>
  );
}
