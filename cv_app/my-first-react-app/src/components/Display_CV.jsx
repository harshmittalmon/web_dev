import letter from "../assets/letter.svg";
import phone from "../assets/phone.svg";
export default function Display_CV({
  fullName,
  email,
  phone,
  experience,
  qualifications,
}) {
  return (
    <div className="display_cv">
      <div className="display_cv_header">
        <h1> {fullName}</h1>
        <div className="letter_and_phone_icons">
          <div className="email">
            <img src={letter} alt="" />
            <p> {email}</p>
          </div>
          <div className="phone">
            <p>{phone}</p>
          </div>
        </div>
      </div>
      <div className="display_cv_body">
        <h1 style={{ fontWeight: 700, fontFamily: "sans-serif", marginBottom : "0.3rem"}}>
          Qualifications
        </h1>

        <div className="pd_line_black" style = {{ marginBottom : "2rem"}}></div>
        <ul className="display_cv_qualifications">
          {qualifications.map((qualification) => {
            return (
              <div className="display_cv_qualification">
                  
                 <div>
                  <h2>{qualification.Course_Name.toUpperCase()}</h2>
                  <h2>({qualification.Start_Date}-{qualification.End_Date}) </h2>
                 </div>
                
                <h2 style = {{ marginBottom : "1rem"}}> {qualification.University_School}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem suscipit amet quos itaque. Alias sunt
                  repellendus cupiditate unde, repellat minima amet assumenda
                  hic blanditiis laboriosam nisi aliquid magni molestiae! Ad.
                </p>
              </div>
            );
          })}
        </ul>
        <h1
          style={{
            fontWeight: 700,
            fontFamily: "sans-serif",
            marginTop: "4rem",
            marginBottom:"0.3rem"
          }}
        >

          {" "}
          Experiences{" "}
        </h1>
        <div className="pd_line_black" style = {{ marginBottom : "2rem"}}></div>
        <ul className="display_cv_experiences">
          {experience.map((experiences) => {
            return (
              <div className="display_cv_experience">
                <div>
                <h2>{experiences.JobTitle.toUpperCase()}</h2>
                <h2>  ({experiences.StartDate}-{experiences.EndDate})</h2>
                </div>
                <h2> {experiences.Employer}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem suscipit amet quos itaque. Alias sunt
                  repellendus cupiditate unde, repellat minima amet assumenda
                  hic blanditiis laboriosam nisi aliquid magni molestiae! Ad.
                </p>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
