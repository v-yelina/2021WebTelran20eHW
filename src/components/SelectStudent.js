import React from "react";
import { GlobalContext } from "../data/GlobalContextProvider";
import Select from "react-select";
import SelectedStudent from "./SelectedStudent";

class SelectStudent extends React.Component {
  static contextType = GlobalContext;

  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    const { options, students } = this.context;
    const selectedOpt = { ...selectedOption };
    const selectedStudent = (() => {
      return students.filter((student) => student.id === selectedOpt.id)[0];
    })();

    return (
      <div className="selectStudent">
        <h2 className="pageHeader">Student Info</h2>
        <h3>Please, choose student to get more information</h3>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <SelectedStudent selectedStudent={selectedStudent} />
      </div>
    );
  }
}

export default SelectStudent;
