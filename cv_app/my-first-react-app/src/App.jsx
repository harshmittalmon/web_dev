import { useEffect, useState } from "react";
import resume_img from "./assets/resume_icon.png";
import viteLogo from "/vite.svg";
import "./App.css";
import Personal_details from "./components/personal_details";
import Qualification_List from "./components/Qualification_List";
import Experience_List from "./components/Experience_List";
import Display_CV from "./components/Display_CV";

function App() {
  const [firstName, setFirstName] = useState("Harsh");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const fullName = `${firstName} ${lastName}`;

  const [qualifications, setQualifications] = useState([]);
  const [experience, setExperience] = useState([]);

  function handleAddQualification(qual) {
    setQualifications((qualifications) => [...qualifications, qual]);
  }
  function handleDeleteQualification(qual) {
    setQualifications((qualifications) => {
      // RETURN STATEMENT NECESSARY
      return qualifications.filter(
        (qualification) => qualification.id !== qual.id
      );
    });
  }

  function handleAddExperience(exp) {
    // console.log("Function Called")
    setExperience((experiences) => [...experiences, exp]);
  }
  function handleDeleteExperience(exp) {
    setExperience((experiences) => {
      // RETURN STATEMENT NECESSARY
      return experiences.filter((experience) => experience.id !== exp.id);
    });
  }

  return (
    <>
      <header>
        <img src={resume_img} alt="" />
        <h1>My Resume </h1>
      </header>
      <div class="grid">
        <Personal_details
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setPhone={setPhone}
        />

        <Qualification_List
          onAddQualification={handleAddQualification}
          onDeleteQualification={handleDeleteQualification}
          qualifications={qualifications}
        />
        <Experience_List
          handleAddExperience={handleAddExperience}
          handleDeleteExperience={handleDeleteExperience}
          experience={experience}
        />

        <Display_CV
          fullName={fullName}
          email={email}
          phone={phone}
          experience={experience}
          qualifications={qualifications}
        />
      </div>
    </>
  );
}
export default App;
