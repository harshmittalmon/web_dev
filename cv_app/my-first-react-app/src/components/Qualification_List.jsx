import { useState } from "react";
import Button from "./Button";
import AddQualification from "./AddQualification";
import Qualification from "./Qualification" ;  
export default function ({
  onAddQualification,
  onDeleteQualification,
  qualifications,
}) {
  const [toggle_Add_Qualification, set_Add_Qualification] = useState(false);
  function handle_Add_Qualification() {
    set_Add_Qualification(
      (toggle_Add_Qualification) => !toggle_Add_Qualification
    );
  }

  return (
    <div className ="qualifications">
      <h4>Qualifications</h4>
      <div className ="pd_line"></div>
      <ul>
        {qualifications.map((qualification) => (
          <Qualification
            qual={qualification}
            onDelete={onDeleteQualification}
            key={qualification.id}
          />
        ))}

      </ul>
      {!toggle_Add_Qualification && (
        <Button
          text="Add Qualification"
          onClick={handle_Add_Qualification}
          classname="add_qualification"
        />
      )}
      {toggle_Add_Qualification && (
        <AddQualification
          onHandleAddQualification={onAddQualification}
          onToggleAddQualification={handle_Add_Qualification}
        />
      )}
      {toggle_Add_Qualification && (
        <Button
          text="Cancel"
          onClick={handle_Add_Qualification}
          classname="cancel_qualification"
        />
      )}
    </div>
  );
}
