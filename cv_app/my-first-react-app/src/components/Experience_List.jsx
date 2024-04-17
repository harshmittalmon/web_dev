import { useState } from "react";

import Button from "./Button";
import AddExperience from "./AddExperience"
import Experience from "./Experience"

export default function ({ handleAddExperience, handleDeleteExperience, experience }) {

  const [showForm, toggleForm] = useState(false);
  function toggle() {
    toggleForm(!showForm);
  }
  return (
    <div className="qualifications experiences">
      <h3>Experiences</h3>
      <div className="pd_line"></div>

      <ul>
        {
          experience.map(
            (exp) => (
              <Experience key={exp.id} exp={exp} onDelete={handleDeleteExperience}
              />
            )
          )
        }
      </ul>

      {
        showForm ?
          <>
            <AddExperience
              onAddExperience={handleAddExperience}
              handleFormState={toggle}
            />
            <Button text="Cancel" classname="add_qualification" onClick={toggle} />
          </> :
          <>
            <Button text="Add Experience" classname="add_qualification" onClick={(toggle)} />
          </>

      }

    </div>
  );
}
