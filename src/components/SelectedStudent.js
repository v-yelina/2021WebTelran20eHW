import React from "react";

const SelectedStudent = (props) => {
  const { selectedStudent } = props;

  return !selectedStudent ? (
    <div className="selectedStudent">No Students choosen</div>
  ) : (
    <div className="selectedStudent">
      <div className="studentData">
        <p>
          <span>Student name:&nbsp;</span>
          {selectedStudent.name}
        </p>
        <p>
          <span>Student age:&nbsp;</span>
          {selectedStudent.age}
        </p>
        <p>
          <span>Student city:&nbsp;</span>
          {selectedStudent.city}
        </p>
      </div>
      <div className="studentPhoto">
        <img src={selectedStudent.photoUrl} alt="Students Photo" />
      </div>
    </div>
  );
};

export default SelectedStudent;
