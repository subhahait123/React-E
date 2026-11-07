import React from "react";
import "./App.css";

// StudentProfile Component
function StudentProfile(props) {
  return (
    <div className="profile">
      <img src={props.image} alt="Student Profile" />

      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <StudentProfile
        name="Rahul"
        email="rahul@gmail.com"
        course="BCA"
        image="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;