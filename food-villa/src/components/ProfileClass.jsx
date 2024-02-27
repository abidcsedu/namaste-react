/* eslint-disable react/prop-types */
import React from "react";

class ProfileClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0, 
      count2: 5,
    };
  }

  render() {
    return (
      <>
        <h1>
          Profile class component
        </h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Count1: {this.state.count1}</h2>
        <button
          onClick={() =>
            this.setState({
              count1: 1,
            })
          }
        >
          set count 1
        </button>
        <h2>Count2: {this.state.count2}</h2>
      </>
    );
  }
}

export default ProfileClassComponent;
