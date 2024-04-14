export default function Personal_details({
  firstName,
  lastName,
  email,
  phone,
  setFirstName,
  setLastName,
  setEmail,
  setPhone
}) {
  return (
    <div className="personal_details">
      <h4>Personal Details</h4>
      <div className="pd_line"></div>
      <div className="first_name">
        <h5>First Name</h5>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="last_name">
        <h5> Last Name</h5>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="email">
        <h5> Email</h5>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="phone">
        <h5>Phone </h5>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </div>
  );
}
