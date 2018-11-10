import React, { Component } from "react";

class PersonalInfo extends React.Component {
  render() {
    return (
      <div>
        <label>Age:</label>
        <br />
        <input value="Age" />
        <br />
        <label>Gender:</label>
        <br />
        <select>
          <option value="Male">Male</option>
          <option value="Male">Female</option>
          <option value="Male">Other</option>
        </select>
        <br />
        <label>Diagnosis:</label>
        <br />
        <select>
          <option value="Autistic">Autistic</option>
          <option value="NonAutisticNoEmployees">
            Non autistic (with autistic employees)
          </option>
          <option value="NonAutisticEmployees">
            Non autistic (without autistic employees)
          </option>
          <option value="Unsure">Unsure/undiagnosed</option>
          <option value="Neurodivergent">Neurodivergent</option>
        </select>
        <br />
      </div>
    );
  }
}

export default PersonalInfo;
