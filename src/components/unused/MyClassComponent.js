import React from "react";

class MyClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myState: true,
    };
  }

  render() {
    return (
      <>
        {this.state.myState && <h4>Class Based Component is Alive!!!</h4>}
        <button
          onClick={() => {
            this.setState({ myState: !this.state.myState });
          }}
        >
          {" "}
          Kill
        </button>
      </>
    );
  }
}

export default MyClassComponent;
